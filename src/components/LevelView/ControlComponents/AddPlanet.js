import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';


var distanceMarks = [
  {
    value: 0.0,
    label: "0",
  },
  {
    value: 1,
    label: "1 Au",
  },
  {
    value: 10,
    label: "10",
  },
];
var sizeMarks = [
  {
    value: 0.0,
    label: "0",
  },
  {
    value: 1,
    label: "Earth",
  },
  {
    value: 10,
    label: "10",
  },
];
var phaseMarks = [
  {
    value: 0.0,
    label: "0",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 180,
    label: "180",
  },
  {
    value: 270,
    label: "270",
  },
  {
    value: 360,
    label: "360",
  },
];

const AddPlanet = (props) => {

  return (
    <Box sx={{ width: 200 }}>
    <Typography variant="button" gutterBottom> Planet </Typography>
    <IconButton aria-label="delete"  color="primary" 
            onClick={() => props.removeMe()}
        ><DeleteIcon />
    </IconButton>
    <br></br>
    <Typography variant="caption" gutterBottom> Distance </Typography>
      <Slider
        aria-label="Always visible"
        value={props.planet.orbitAus}
        onChange={(_, newValue) => props.setPlanet({...props.planet, orbitAus: newValue})}
        step={0.01}
        min={0.1}
        max={2.0}
        valueLabelDisplay="auto"
        marks={distanceMarks}
      />
      <Typography variant="caption" gutterBottom> Size </Typography>
      <Slider
        aria-label="Always visible"
        value={props.planet.sizeEarths}
        onChange={(_, newValue) => props.setPlanet({...props.planet, sizeEarths: newValue})}
        step={0.1}
        min={0.1}
        max={10}
        valueLabelDisplay="auto"
        marks={sizeMarks}
      />
      <Typography variant="caption" gutterBottom> Phase </Typography>
      <Slider
        aria-label="Always visible"
        value={props.planet.phaseDeg}
        onChange={(_, newValue) => props.setPlanet({...props.planet, phaseDeg: newValue})}
        step={5}
        min={0}
        max={360}
        valueLabelDisplay="auto"
        marks={phaseMarks}
      />
    </Box>
  );
};
export default AddPlanet;
