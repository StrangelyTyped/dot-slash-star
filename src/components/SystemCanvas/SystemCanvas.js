import { Stage, Layer, Arrow, Text, Circle, Arc, Rect, RegularPolygon } from 'react-konva';
import konva from "konva";
import { calculateOrbitalPhaseAtT, calculateTotalPulsationEffect } from '../../data/CelestialMath';
import { MAX_RADIUS_AU, OBSERVER_POSITION } from "../../data/Constants"

const DEG_RAD = Math.PI / 180;

const SystemCanvas = (props) => {
  const userModel = props.userModel;
  const simulationTimePct = props.simulationTimePct

  const SUN_RADIUS = 40
  const EARTH_RADIUS = 2
  const CANVAS_SIZE = Math.floor(0.9*(window.innerWidth / 2));
  const CENTER = CANVAS_SIZE/2;
  let pixelScale = (CANVAS_SIZE / 2) / MAX_RADIUS_AU;
  let auTextSize = new konva.Text({ fontSize: 16, text: "1 AU"}).measureSize()

  const layers = []

  const star = userModel.filter(config => config.feature === "star")[0]
  layers.push(
    <Layer>
      <Circle x={CENTER} y={CENTER} radius={SUN_RADIUS} fill="yellow" />
    </Layer>
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
        <Layer x={CENTER} y={CENTER} offsetX={CENTER} offsetY={CENTER} rotation={i*(360/numArrows)}>
          <Arrow
            x={CENTER}
            y={CENTER - (SUN_RADIUS + 40)}
            points={points}
            pointerLength={pointerSize}
            pointerWidth={pointerSize}
            fill={'orange'}
            stroke={'orange'}
            strokeWidth={1}
          />
        </Layer>
      )
    }
  }
  

  let planets = userModel.filter(config => config.feature === "planet")
  planets.forEach(planet => {
    const planetOrbitRadius = planet.settings.orbitAus * pixelScale
    const planetPhase = calculateOrbitalPhaseAtT(planet.settings.phaseDeg, planet.settings.orbitAus, planet.settings.sizeEarths, star.settings.starMassSuns, simulationTimePct)

    const xOfs = planetOrbitRadius * Math.sin(planetPhase * DEG_RAD)
    const yOfs = planetOrbitRadius * Math.cos(planetPhase * DEG_RAD)

    layers.push(
      <Layer>
        <Circle x={CENTER} y={CENTER} radius={planetOrbitRadius} strokeWidth={1} stroke="grey" />
        <Circle x={CENTER+xOfs} y={CENTER+yOfs} radius={planet.settings.sizeEarths * EARTH_RADIUS} fill="brown" />
      </Layer>
    )
  })

  const observerOfsX = OBSERVER_POSITION.radiusAu * pixelScale * Math.sin(OBSERVER_POSITION.phaseDeg * DEG_RAD)
  const observerOfsY = OBSERVER_POSITION.radiusAu * pixelScale * Math.cos(OBSERVER_POSITION.phaseDeg * DEG_RAD)


  return (
    <>
    <Stage width={CANVAS_SIZE} height={CANVAS_SIZE}>
      <Layer>
        <Text x={10} y={10} text={"Note: Celestial body size not to scale"} fill="white" fontSize={12} />
        <Arc rotation={100} angle={340} x={CENTER} y={CENTER} outerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} innerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} stroke="lightgrey" strokeWidth={1} dash={[10,20]} />
        <Text x={CENTER - auTextSize.width / 4} y={CENTER + (CANVAS_SIZE/(2*MAX_RADIUS_AU)) - 8} fill="lightgrey" fontSize={16} text="1 AU" />
      </Layer>
      <Layer x={CENTER + observerOfsX} y={CENTER + observerOfsY} rotation={-(OBSERVER_POSITION.phaseDeg - 90)}>
        <Rect x={10} y={0} fill="white" width={30} height={20} cornerRadius={5} />
        <RegularPolygon x={0} y={0} offsetY={-10} fill="white" sides={3} radius={10} rotation={-30} cornerRadius={5} />
      </Layer>
      {layers}
    </Stage>
    </>
  );
};

export default SystemCanvas;
  