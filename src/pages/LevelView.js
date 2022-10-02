import { Box, Drawer, Paper, Stack } from '@mui/material';
import SystemCanvas from '../components/SystemCanvas/SystemCanvas';
import SystemConfig from '../components/SystemConfig/SystemConfig';
import LevelData from "../data/levels";
import AddPlanet from "../components/ControlComponents/AddPlanet"
import React from "react";
import {useParams} from "react-router-dom";

const drawerWidth = "25%";

const LevelView = (props) => {
    const { level } = useParams()
    const levelId = level
    const [userModel, setUserModel] = React.useState(LevelData[levelId].levelConfig.initialState)
    const [simulationTimePct, setSimulationTimePct] = React.useState(0);

    // For testing only, TODO: add slider
    setTimeout(() => {
        console.log("Simulation tick ", simulationTimePct)
        setSimulationTimePct((simulationTimePct + 0.001) % 1);
    }, 100)

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <Box
                component="main"
                sx={{ flexGrow: 1, height: "100vh", background: "black"}}
            >
                <SystemCanvas simulationTimePct={simulationTimePct} userModel={userModel} levelId={levelId} levelData={LevelData[levelId]} />
            </Box>
   
            <Drawer open="true"
                anchor="right"
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    },
                }}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        style={{height: "100%"}}>
                    <SystemConfig levelId={props.level} levelData={LevelData[props.level]} />
                    {/* TODO remove this hardcoded AddPlanet form */}
                    <AddPlanet 
                        removeMe={() => {console.log("remove");}}
                        setDistance={(distance) => {console.log("set distance: " + distance);}}
                        setSize={(size) => {console.log("set size: " + size);}}
                        />
                    <SystemConfig simulationTimePct={simulationTimePct} userModel={userModel} levelId={levelId} levelData={LevelData[levelId]} />
                    <Paper>Chart 1 Here</Paper>
                    <Paper>Chart 2 Here</Paper>
                </Stack>
            </Drawer>
        </Box>
        </>
    )
};
  
export default LevelView;