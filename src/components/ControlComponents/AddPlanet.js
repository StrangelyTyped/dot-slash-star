import React, { useState }  from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import DeleteIcon from '@mui/icons-material/Delete';

const AddPlanet = (props) => {
    const handleremove = () => {
        console.log("remove this AddPlanetComponent")
        props.removeMe();
      };

      const handleDistanceChange = (event, newValue) => {
        props.setDistance(newValue);
      };
      const handleSizeChange = (event, newValue) => {
        props.setSize(newValue);
      };
    
    
  var distanceMarks = [
    {
      value: 0.1,
    //   label: "Minumum",
    },
    {
      value: 1,
      label: "1 Au",
    },
    {
      value: 10,
    //   label: "Maximum",
    },
  ];
  var sizeMarks = [
    {
      value: 0.5,
    //   label: "Minumum",
    },
    {
      value: 1,
      label: "1 Earth",
    },
    {
      value: 10,
    //   label: "Maximum",
    },
  ];
  return (
    <Box sx={{ width: 300 }}>
      <h3>Distance from the sun</h3>
      <Slider
        aria-label="Always visible"
        defaultValue={1}
        onChange={handleDistanceChange}
        step={0.5}
        min={0}
        max={10}
        marks={distanceMarks}
        valueLabelDisplay="on"
      />
      <h3>Size of planet</h3>
      <Slider
        aria-label="Always visible"
        defaultValue={1}
        onChange={handleSizeChange}
        step={0.5}
        min={0}
        max={10}
        marks={sizeMarks}
        valueLabelDisplay="on"
      />
       <IconButton aria-label="delete"  color="primary" 
            onClick={() => {handleremove();}}
        >
        <DeleteIcon />
        </IconButton>
    </Box>
  );
};
export default AddPlanet;
