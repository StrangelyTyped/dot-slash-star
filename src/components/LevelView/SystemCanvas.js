import { Stage, Layer, Arrow, Text, Circle, Arc, Rect, RegularPolygon, Group, Line } from 'react-konva';
import konva from "konva";
import { calculateOrbitalPhaseAtT, calculateTotalPulsationEffect } from '../../data/CelestialMath';
import { MAX_RADIUS_AU, OBSERVER_POSITION } from "../../data/Constants"

const DEG_RAD = Math.PI / 180;

const BASE_SUN_RADIUS_AU = 0.00465046726;
const BASE_PLANET_RADIUS_AU = 4.25875e-5;
const SUN_RADIUS_MULTIPLIER_FACTOR = 30;
const PLANET_RADIUS_MULTIPLIER_FACTOR = 300;

function createDebuggingViews(star, planet, orbitalPhasePlanet){
  const CANVAS_SIZE = Math.floor(0.9*(window.innerWidth / 2));
  const CENTER = CANVAS_SIZE/2;
  let pixelScale = (CANVAS_SIZE / 2) / MAX_RADIUS_AU;

  const views = []

  //Note: all this math assumes the observer is at a fixed position at phase=90

  const starRadius = BASE_SUN_RADIUS_AU * star.settings.starMassSuns * SUN_RADIUS_MULTIPLIER_FACTOR;
  // A1 is the angle between the observer-sun line and the edge of the sun (RADIANS)
  const a1 = Math.abs(Math.atan(starRadius / OBSERVER_POSITION.radiusAu))

  if(planet.orbitAus > OBSERVER_POSITION.radiusAu){
    // Planet circles behind observer
    return views;
  }

  // Note: phase base = 90
  if(orbitalPhasePlanet > 180){
      // Planet is on far side of sun
      return views;
  }
  // Orbital Offset Planet is the angle of the planet relative to the observer-sun line (from the side of the sun)
  const orbitalPhaseOffsetPlanet = (orbitalPhasePlanet + 90) % 360;

  // elevationPlanet - the distance (perpendicular to the observer-sun line) between the line and the planet
  // In theory this can be absolute but in practice we need to potentially stack multiple planets simultaneously
  const elevationPlanetCenter = planet.settings.orbitAus * Math.sin(orbitalPhaseOffsetPlanet * DEG_RAD)
  const planetSizeRadius = (planet.settings.sizeEarths * BASE_PLANET_RADIUS_AU * PLANET_RADIUS_MULTIPLIER_FACTOR);
  const elevationPlanetLeadingEdge = elevationPlanetCenter - planetSizeRadius
  const elevationPlanetTrailingEdge = elevationPlanetCenter + planetSizeRadius

  // Radius projection planet - the distance along the observer-sun line (From the sun) to the elevation
  const radiusProjectionPlanet = Math.abs(planet.settings.orbitAus * Math.cos(orbitalPhaseOffsetPlanet * DEG_RAD))

  // a2 should be the angle between the observer-sun line and the planet (from the OBSERVER side) (RADIANS)
  const a2Leading = Math.atan(elevationPlanetLeadingEdge / (OBSERVER_POSITION.radiusAu - radiusProjectionPlanet))
  const a2Trailing = Math.atan(elevationPlanetTrailingEdge / (OBSERVER_POSITION.radiusAu - radiusProjectionPlanet))

  views.push(<Line closed={true} 
    points={[CENTER + (OBSERVER_POSITION.radiusAu * pixelScale), CENTER, CENTER+(radiusProjectionPlanet * pixelScale), CENTER+(elevationPlanetCenter * pixelScale), CENTER+(radiusProjectionPlanet * pixelScale), CENTER]} 
    stroke="lightblue"
    fill="lightblue"
    fillEnabled={Math.abs(a2Leading) < Math.abs(a1) || Math.abs(a2Trailing) < Math.abs(a1) || (a2Leading < -a1 && a2Trailing > a1)} />)
  
    let occlusionPct = 0
    if(a2Leading < -a1 && a2Trailing > a1){
      views.push(<Text x={CENTER+100} y={CENTER+100} text="Eclipse" stroke="red" fontSize={16} />)
      occlusionPct = 1
    } else if (Math.abs(a2Leading) < Math.abs(a1) && Math.abs(a2Trailing) < Math.abs(a1)){
      views.push(<Text x={CENTER+100} y={CENTER+100} text="Full Planet Partial Occlusion" stroke="red" fontSize={16} />)
      occlusionPct = (planetSizeRadius * planetSizeRadius) / (starRadius * starRadius)
    } else if (Math.abs(a2Leading) < Math.abs(a1)){
      views.push(<Text x={CENTER+100} y={CENTER+100} text="Leading Edge Occlusion" stroke="red" fontSize={16} />)
      //occlusionPct = ?
    } else if (Math.abs(a2Trailing) < Math.abs(a1)){
      views.push(<Text x={CENTER+100} y={CENTER+100} text="Trailing Edge Occlusion" stroke="red" fontSize={16} />)
      //occlusionPct = ?
    }
    views.push(<Text x={CENTER+100} y={CENTER+120} text={"Masking " + Math.round(occlusionPct*100) + "%"} stroke="white" fontSize={16} />)

  views.push(<Line closed={false} 
    points={[CENTER+(radiusProjectionPlanet * pixelScale), CENTER+(elevationPlanetLeadingEdge * pixelScale), CENTER + (OBSERVER_POSITION.radiusAu * pixelScale), CENTER, CENTER+(radiusProjectionPlanet * pixelScale), CENTER+(elevationPlanetTrailingEdge * pixelScale)]} 
    stroke="orange" />)
  views.push(<Line closed={false}
    points={[CENTER + (OBSERVER_POSITION.radiusAu * pixelScale), CENTER, CENTER+(radiusProjectionPlanet * pixelScale), CENTER+(elevationPlanetCenter * pixelScale)]}
    stroke="yellow" />)

  return views
}

const SystemCanvas = (props) => {
  const userModel = props.userModel;
  const simulationTimePct = props.simulationTimePct

  const CANVAS_SIZE = Math.floor(0.9*(window.innerWidth / 2));
  const CENTER = CANVAS_SIZE/2;
  let pixelScale = (CANVAS_SIZE / 2) / MAX_RADIUS_AU;
  let auTextSize = new konva.Text({ fontSize: 16, text: "1 AU"}).measureSize()

  const layers = []

  const star = userModel.filter(config => config.feature === "star")[0]
  const starRadius = BASE_SUN_RADIUS_AU * star.settings.starMassSuns * SUN_RADIUS_MULTIPLIER_FACTOR;

  layers.push(
    <Group key="star">
      <Circle x={CENTER} y={CENTER} radius={starRadius * pixelScale} fill="yellow" />
      <Line closed={false} 
        points={[CENTER, CENTER - starRadius * pixelScale, CENTER + (OBSERVER_POSITION.radiusAu * pixelScale), CENTER, CENTER, CENTER + starRadius * pixelScale]} 
        stroke="lightgrey"
        dash={[5,5]} />
    </Group>
  )

  const MAX_PULSATION = 0.01

  const pulsations = userModel.filter(config => config.feature === "pulsation")
  const pulsationResult = calculateTotalPulsationEffect(pulsations, simulationTimePct);
  const arrowLength = 20 * Math.min(1, Math.abs(pulsationResult - 1) / MAX_PULSATION);

  if (arrowLength > 0){
    const pointerSize = Math.min(arrowLength, 5);
    let points;
    if(pulsationResult > 1){
      points = [0, 20, 0, 20 - arrowLength]
    } else {
      points = [0, 20, 0, 20 + arrowLength]
    }
    const numArrows = 8
    for(let i = 0; i < numArrows; i++){
      layers.push(
        <Group x={CENTER} y={CENTER} offsetX={CENTER} offsetY={CENTER} rotation={i*(360/numArrows)} key={"pulse-arrow-" + i}>
          <Arrow
            x={CENTER}
            y={CENTER - ((starRadius * pixelScale) + 40)}
            points={points}
            pointerLength={pointerSize}
            pointerWidth={pointerSize}
            fill={'orange'}
            stroke={'orange'}
            strokeWidth={1}
          />
        </Group>
      )
    }
  }
  

  let planets = userModel.filter(config => config.feature === "planet")
  planets.forEach((planet, idx) => {
    const planetOrbitRadius = planet.settings.orbitAus * pixelScale
    const planetPhase = calculateOrbitalPhaseAtT(planet.settings.phaseDeg, planet.settings.orbitAus, planet.settings.sizeEarths, star.settings.starMassSuns, simulationTimePct)

    const xOfs = planetOrbitRadius * Math.sin(planetPhase * DEG_RAD)
    const yOfs = planetOrbitRadius * Math.cos(planetPhase * DEG_RAD)

    const debuggingViews = createDebuggingViews(star, planet, planetPhase)
    const planetSizeRadius = pixelScale * planet.settings.sizeEarths * BASE_PLANET_RADIUS_AU * PLANET_RADIUS_MULTIPLIER_FACTOR

    layers.push(
      <Group key={"planet-" + idx}>
        <Circle x={CENTER} y={CENTER} radius={planetOrbitRadius} strokeWidth={1} stroke="grey" />
        <Circle x={CENTER+xOfs} y={CENTER+yOfs} radius={planetSizeRadius} fill="brown" />
        {debuggingViews}
      </Group>
    )
  })

  const observerOfsX = OBSERVER_POSITION.radiusAu * pixelScale * Math.sin(OBSERVER_POSITION.phaseDeg * DEG_RAD)
  const observerOfsY = OBSERVER_POSITION.radiusAu * pixelScale * Math.cos(OBSERVER_POSITION.phaseDeg * DEG_RAD)


  return (
    <>
    <Stage width={CANVAS_SIZE} height={CANVAS_SIZE}>
      <Layer>
        <Group>
          <Text x={10} y={10} text={"Note: Celestial body size not to scale"} fill="white" fontSize={12} />
          <Arc rotation={100} angle={340} x={CENTER} y={CENTER} outerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} innerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} stroke="lightgrey" strokeWidth={1} dash={[10,20]} />
          <Text x={CENTER - auTextSize.width / 4} y={CENTER + (CANVAS_SIZE/(2*MAX_RADIUS_AU)) - 8} fill="lightgrey" fontSize={16} text="1 AU" />
        </Group>
        <Group x={CENTER + observerOfsX} y={CENTER + observerOfsY - 10} rotation={-(OBSERVER_POSITION.phaseDeg - 90)}>
          <Rect x={10} y={0} fill="white" width={30} height={20} cornerRadius={5} />
          <RegularPolygon x={0} y={0} offsetY={-10} fill="white" sides={3} radius={10} rotation={-30} cornerRadius={5} />
        </Group>
        {layers}
      </Layer>
    </Stage>
    </>
  );
};

export default SystemCanvas;
  