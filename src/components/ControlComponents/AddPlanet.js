import React, { useState }  from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

const AddPlanet = (props) => {
    const initialState = props.initialState;
    const handleremove = () => {
        console.log("remove this AddPlanetComponent")
        props.removeMe();
      };
      const handleDistanceChange = (event, newValue) => {
        props.setDistance(initialState.position, newValue);
      };
      const handleSizeChange = (event, newValue) => {
        props.setSize(initialState.position, newValue);
      };
      const handlePhaseChange = (event, newValue) => {
        props.setPhase(initialState.position, newValue);
      };
    
    
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
  return (
    <Box sx={{ width: 200 }}>
    <Typography variant="button" gutterBottom> Planet </Typography>
    <IconButton aria-label="delete"  color="primary" 
            onClick={() => {handleremove();}}
        ><DeleteIcon />
    </IconButton>
    <br></br>
    <Typography variant="caption" gutterBottom> Distance </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={initialState.distance}
        onChange={handleDistanceChange}
        step={0.5}
        min={0.1}
        max={2.0}
        marks={distanceMarks}
      />
      <Typography variant="caption" gutterBottom> Size </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={initialState.size}
        onChange={handleSizeChange}
        step={0.5}
        min={0.1}
        max={10}
        marks={sizeMarks}
      />
      <Typography variant="caption" gutterBottom> Phase </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={initialState.phase}
        onChange={handlePhaseChange}
        step={5}
        min={0}
        max={360}
        marks={phaseMarks}
      />
    </Box>
  );
};
export default AddPlanet;
