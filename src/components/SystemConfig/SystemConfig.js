import React from "react"
import AddIcon from '@mui/icons-material/Add'
import { Typography, Toolbar, IconButton, Menu, MenuItem, Divider, Box } from '@mui/material';
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
        // skip the first item as it is always the star
        console.log(userModel)
        var elementtList = [];
         for (var i=1; i<userModel.length; i++){
            var settings = userModel[i].settings;
            if (userModel[i].feature === "pulsation"){
                elementtList.push(
                    <AddPulsation 
                        removeMe={() => {
                            console.log("remove");
                            userModel.splice(i, 1);
                            props.setUserModel(userModel);
                        }}
                        setPeriod={(period) => {
                            settings.periodDays = period;
                            props.setUserModel(userModel);
                        }}
                        setMagnitude={(period) => {
                            settings.magnitudePct = period;
                            props.setUserModel(userModel);
                        }}
                        initialState={{magnitude: settings.magnitudePct, period: settings.periodDays}}
                    />
                )
            } else if (userModel[i].feature === "planet"){
                elementtList.push(
                    <AddPlanet 
                        removeMe={() => {
                            console.log("remove");
                            userModel.splice(i, 1);
                            props.setUserModel(userModel);
                        }}
                        setDistance={(distance) => {
                            settings.orbitAus = distance;
                            props.setUserModel(userModel);
                            
                        }}
                        setSize={(size) => {
                            settings.sizeEarths = size;
                            props.setUserModel(userModel);
                        }}
                        setPhase={(phase) => {
                            settings.phaseDeg = phase;
                            props.setUserModel(userModel);
                        }}
                        initialState={{distance: settings.orbitAus, size: settings.sizeEarths, phase: settings.phaseDeg}}
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
            {drawControlBoxes(props.userModel)}
            <Box style={{flexGrow: 1}}>Stuff</Box>
        </>
    );

};
  
export default SystemConfig;