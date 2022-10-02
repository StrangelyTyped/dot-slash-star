import React from "react"
import AddIcon from '@mui/icons-material/Add'
import { Typography, Toolbar, IconButton, Menu, MenuItem, Divider, Box } from '@mui/material';
import AddPlanet from "../ControlComponents/AddPlanet";
import AddPulsation from "../ControlComponents/AddPulsation";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";


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
        var modifiabbleModel = structuredClone(userModel);
        // skip the first item as it is always the star
        var elementtList = [];
         for (var i=1; i<userModel.length; i++){
            var settings = modifiabbleModel[i].settings;
            if (userModel[i].feature === "pulsation"){
                elementtList.push(
                    <AddPulsation 
                        removeMe={(position) => {
                            console.log("remove");
                            // modifiabbleModel.splice(position, 1);
                            // props.setUserModel(modifiabbleModel);
                        }}
                        setPeriod={(position, period) => {
                            modifiabbleModel[position].settings.periodDays = period;
                            // setState({usermodel[i].settings.periodDays: period});
                            props.setUserModel(modifiabbleModel);
                        }}
                        setMagnitude={(position, mag) => {
                            modifiabbleModel[position].settings.magnitudePct = mag;
                            props.setUserModel(modifiabbleModel);
                        }}
                        initialState={{position: i, magnitude: settings.magnitudePct, period: settings.periodDays}}
                    />
                )
            } else if (userModel[i].feature === "planet"){
                elementtList.push(
                    <AddPlanet 
                        removeMe={(position) => {
                            console.log("remove");
                            // modifiabbleModel.splice(position, 1);
                            // props.setUserModel(modifiabbleModel);
                        }}
                        setDistance={(position, distance) => {
                            modifiabbleModel[position].settings.orbitAus = distance;
                            props.setUserModel(modifiabbleModel);
                            
                        }}
                        setSize={(position, size) => {
                            modifiabbleModel[position].settings.sizeEarths = size;
                            props.setUserModel(modifiabbleModel);
                        }}
                        setPhase={(position, phase) => {
                            modifiabbleModel[position].settings.phaseDeg = phase;
                            props.setUserModel(modifiabbleModel);
                        }}
                        initialState={{position: i, distance: settings.orbitAus, size: settings.sizeEarths, phase: settings.phaseDeg}}
                    />
                )
            } else {
                console.log("how draw: " + userModel[i].feature);
            }
        }
        return elementtList;
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

            <Box style={{flexGrow: 1}}>t = {Math.round(props.simulationTimePct*10000)/10000}</Box>
            {drawControlBoxes(props.userModel)}
        </>
    );

};
  
export default SystemConfig;