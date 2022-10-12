import React from "react"
import AddIcon from '@mui/icons-material/Add'
import { Typography, Toolbar, IconButton, Menu, MenuItem, Divider, Box, Paper } from '@mui/material';
import AddPlanet from "../ControlComponents/AddPlanet";
import AddPulsation from "../ControlComponents/AddPulsation";


const SystemConfig = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    var drawControlBoxes = ((userModel) =>  {
        var modifiableModel = structuredClone(userModel);
        // skip the first item as it is always the star
        var elementList = [];
         for (var i=0; i<userModel.length; i++){
            var settings = modifiableModel[i].settings;
            if (userModel[i].feature === "pulsation"){
                elementList.push(
                    <AddPulsation 
                        key={"feature-" + i}
                        removeMe={(position) => {
                            console.log("remove");
                            // modifiabbleModel.splice(position, 1);
                            // props.setUserModel(modifiabbleModel);
                        }}
                        setPeriod={(position, period) => {
                            modifiableModel[position].settings.periodDays = period;
                            // setState({usermodel[i].settings.periodDays: period});
                            props.setUserModel(modifiableModel);
                        }}
                        setMagnitude={(position, mag) => {
                            modifiableModel[position].settings.magnitudePct = mag;
                            props.setUserModel(modifiableModel);
                        }}
                        initialState={{position: i, magnitude: settings.magnitudePct, period: settings.periodDays}}
                    />
                )
            } else if (userModel[i].feature === "planet"){
                elementList.push(
                    <AddPlanet 
                        key={"feature-" + i}
                        removeMe={(position) => {
                            console.log("remove");
                            // modifiabbleModel.splice(position, 1);
                            // props.setUserModel(modifiabbleModel);
                        }}
                        setDistance={(position, distance) => {
                            modifiableModel[position].settings.orbitAus = distance;
                            props.setUserModel(modifiableModel);
                            
                        }}
                        setSize={(position, size) => {
                            modifiableModel[position].settings.sizeEarths = size;
                            props.setUserModel(modifiableModel);
                        }}
                        setPhase={(position, phase) => {
                            modifiableModel[position].settings.phaseDeg = phase;
                            props.setUserModel(modifiableModel);
                        }}
                        initialState={{position: i, distance: settings.orbitAus, size: settings.sizeEarths, phase: settings.phaseDeg}}
                    />
                )
            } else if (userModel[i].feature === "star"){
                //No-op
            } else {
                console.log("how draw: " + userModel[i].feature);
            }
        }
        return elementList;
    })
    return (
        <>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Solar System
                </Typography>
                <IconButton 
                    id="system-config-add"
                    aria-label="add option"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <AddIcon />
                </IconButton>
                <Menu
                    id="system-config-add-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'system-config-add',
                    }}
                >
                    <MenuItem onClick={handleClose}>Planet</MenuItem>
                    <MenuItem onClick={handleClose}>Sunspot</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Pulsation</MenuItem>
                </Menu>
            </Toolbar>
            <Paper sx={{padding: "0px 20px"}}>
                <p>
                    t = {props.simulationTimePct.toFixed(3)} Earth Years
                </p>
            </Paper>
            <Box>
                {drawControlBoxes(props.userModel)}
            </Box>
        </>
    );

};
  
export default SystemConfig;