import { Stage, Layer, Arrow, Text, Circle, Arc } from 'react-konva';
import konva from "konva";
import { calculateOrbitalPhaseAtT } from '../../data/CelestialMath';

const DEG_RAD = Math.PI / 180;

const SystemCanvas = (props) => {
  const userModel = props.userModel;
  const simulationTimePct = props.simulationTimePct

  const SUN_RADIUS = 40
  const EARTH_RADIUS = 2
  const CANVAS_SIZE = 1024
  const CENTER = CANVAS_SIZE/2;
  const MAX_RADIUS_AU = 2
  let pixelScale = MAX_RADIUS_AU / (CANVAS_SIZE / 2);
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
    // TODO: find pulsation freqency modifiers and compute
  const pulsationResult = 0.990;
  if (pulsationResult !== 1.0){
    let points;
    const arrowLength = 20 * Math.min(1, Math.abs(pulsationResult - 1) / MAX_PULSATION);
    if(pulsationResult > 1){
      points = [0, 20, 0, 20 - arrowLength]
    } else {
      points = [0, 20 - arrowLength, 0, 20]
    }
    const numArrows = 8
    for(let i = 0; i < numArrows; i++){
    layers.push(
      <Layer x={CENTER} y={CENTER} offsetX={CENTER} offsetY={CENTER} rotation={i*(360/numArrows)}>
        <Arrow
          x={CENTER}
          y={CENTER - (SUN_RADIUS + 30)}
          points={points}
          pointerLength={5}
          pointerWidth={5}
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
    const planetOrbitRadius = planet.settings.orbitAus * (1/pixelScale)
    const planetPhase = calculateOrbitalPhaseAtT(planet.settings.phaseDeg, planet.settings.orbitAus, planet.settings.sizeEarths, star.settings.starMassSuns, simulationTimePct)

    const xOfs = planetOrbitRadius * Math.sin(planetPhase * DEG_RAD)
    const yOfs = planetOrbitRadius * Math.cos(planetPhase * DEG_RAD)

    layers.push(
      <Layer>
        <Circle x={CENTER} y={CENTER} radius={planetOrbitRadius} strokeWidth={1} stroke="grey" />
        <Circle x={CENTER-xOfs} y={CENTER-yOfs} radius={planet.settings.sizeEarths * EARTH_RADIUS} fill="brown" />
      </Layer>
    )
  })

  return (
    <Stage width={CANVAS_SIZE} height={CANVAS_SIZE}>
      <Layer>
        <Text x={10} y={10} text={"Note: Celestial body size not to scale"} fill="white" fontSize={12} />
        <Arc rotation={100} angle={340} x={CENTER} y={CENTER} outerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} innerRadius={CANVAS_SIZE/(2*MAX_RADIUS_AU)} stroke="lightgrey" strokeWidth={1} dash={[10,20]} />
        <Text x={CENTER - auTextSize.width / 4} y={CENTER + (CANVAS_SIZE/(2*MAX_RADIUS_AU)) - 8} fill="lightgrey" fontSize={16} text="1 AU" />
      </Layer>
      {layers}
    </Stage>
  );
};

export default SystemCanvas;
  