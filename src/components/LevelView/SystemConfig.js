import React from "react"
import AddIcon from '@mui/icons-material/Add'
import { Typography, Toolbar, IconButton, Menu, MenuItem, Divider, Box, Paper } from '@mui/material';
import AddPlanet from "./ControlComponents/AddPlanet";
import AddPulsation from "./ControlComponents/AddPulsation";


const SystemConfig = (props) => {
    const userModel = props.userModel
    const [addFeatureMenuAnchor, setAddFeatureMenuAnchor] = React.useState(null);
    const addFeatureMenuIsOpen = Boolean(addFeatureMenuAnchor);

    const closeAddFeature = () => setAddFeatureMenuAnchor(null)
    const addPlanet = () => {
        props.setUserModel([
            ...userModel,
            {
                feature: "planet",
                settings: {
                    orbitAus: 1,
                    sizeEarths: 1,
                    phaseDeg: 0
                }
            }
        ])
        closeAddFeature()
    }
    const addPulsation = () => {
        props.setUserModel([
            ...userModel,
            {
                feature: "pulsation",
                settings: {
                    periodDays: 365,
                    magnitudePct: 0
                }
            }
        ])
        closeAddFeature()
    }

    var drawControlBoxes = (() =>  {
        const elementList = [];
        userModel.forEach((feature, i) => {
            const removeMe = () => {
                props.setUserModel(userModel.filter((entry, j) => j !== i))
            }
            const setFeature = (settings) => {
                props.setUserModel(userModel.map((entry, j) => j === i ? {...entry, settings} : entry))
            }
            if (feature.feature === "pulsation"){
                elementList.push(
                    <AddPulsation 
                        key={"pulsation-" + i}
                        removeMe={removeMe}
                        setPulsation={setFeature}
                        pulsation={feature.settings}
                    />
                )
            } else if (feature.feature === "planet"){
                elementList.push(
                    <AddPlanet 
                        key={"planet-" + i}
                        removeMe={removeMe}
                        setPlanet={setFeature}
                        planet={feature.settings}
                    />
                )
            } else if (feature.feature === "star"){
                //No-op
            } else {
                console.log("Unknown feature type " + feature.feature);
            }
        })
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
                    aria-controls={addFeatureMenuIsOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={addFeatureMenuIsOpen ? 'true' : undefined}
                    onClick={(event) => setAddFeatureMenuAnchor(event.target)}>
                    <AddIcon />
                </IconButton>
                <Menu
                    id="system-config-add-menu"
                    anchorEl={addFeatureMenuAnchor}
                    open={addFeatureMenuIsOpen}
                    onClose={closeAddFeature}
                    MenuListProps={{
                    'aria-labelledby': 'system-config-add',
                    }}
                >
                    <MenuItem onClick={addPlanet}>Planet</MenuItem>
                    <Divider />
                    <MenuItem onClick={addPulsation}>Pulsation</MenuItem>
                </Menu>
            </Toolbar>
            <Paper sx={{padding: "0px 20px"}}>
                <p>
                    t = {props.simulationTimePct.toFixed(3)} Earth Years
                </p>
            </Paper>
            <Box>
                {drawControlBoxes()}
            </Box>
        </>
    );

};
  
export default SystemConfig;