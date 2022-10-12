import React  from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

const AddPulsation = (props) => {
    const initialState = props.initialState;
    const handleremove = () => {
        props.removeMe();
      };

      const handlePeriodChange = (event, newValue) => {
        props.setPeriod(initialState.position, newValue);
      };
      const handleSizeChange = (event, newValue) => {
        props.setMagnitude(initialState.position, newValue);
      };
    
    
  var magnitudeMarks = [
    {
      value: 0.0,
      label: "0%",
    },
    {
      value: 1,
      label: "1%",
    },
  ];
  var periodMarks = [
    {
      value: 0.0,
      label: "0",
    },
    {
      value: 365,
      label: "1 Year",
    },
    // {
    //   value: 730,
    //   label: "2 Years",
    // },
    // {
    //   value: 1095,
    //   label: "3 Years",
    // },
    // {
    //   value: 1460,
    //   label: "4 Years",
    // }
  ];
  return (
    <Box sx={{ width: 200 }}>
    <Typography variant="button" gutterBottom> Pulsation </Typography>
       <IconButton aria-label="delete"  color="primary" 
            onClick={() => {handleremove();}}
        >
        <DeleteIcon />
        </IconButton>
    <br></br>
    <Typography variant="caption" gutterBottom> Period (days) </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={initialState.period}
        onChange={handlePeriodChange}
        step={5}
        min={1}
        max={730}
        valueLabelDisplay="auto"
        marks={periodMarks}
      />
      <Typography variant="caption" gutterBottom> Magnitude </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={initialState.magnitude}
        onChange={handleSizeChange}
        step={0.1}
        min={0}
        max={1}
        valueLabelDisplay="auto"
        marks={magnitudeMarks}
      />
    </Box>
  );
};
export default AddPulsation;
