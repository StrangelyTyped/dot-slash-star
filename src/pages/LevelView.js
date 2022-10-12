import { Box, Drawer, Stack, Button } from '@mui/material';
import SystemCanvas from '../components/SystemCanvas/SystemCanvas';
import SystemConfig from '../components/SystemConfig/SystemConfig';
import LevelData from "../data/levels";
import SimulationResult from '../components/SimulationResult/SimulationResult';
import InfoCard from '../components/InfoCard/InfoCard';
import React from "react";
import {useParams} from "react-router-dom";
import { ANIMATION_RESOLUTION_YEARS, SIMULATION_LENGTH_YEARS } from '../data/Constants';

const drawerWidth = "25%";

const LevelView = (props) => {
    const { level } = useParams()
    const levelId = level
    const [userModel, setUserModel] = React.useState(LevelData[levelId].levelConfig.initialState)
    const [simulationTimePct, setSimulationTimePct] = React.useState(0);
    const [modalOpen, setModalOpen] = React.useState(true);

    React.useEffect(() => {
        // For testing only, TODO: add slider
        setTimeout(() => {
            setSimulationTimePct((simulationTimePct + ANIMATION_RESOLUTION_YEARS) % SIMULATION_LENGTH_YEARS);
        }, 100)
    })

    const handleOpen = () => {
        console.log(modalOpen)
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    return (
        <>
        <InfoCard handleClose={handleClose} modalOpen={modalOpen} levelId={levelId} levelData={LevelData[levelId]} />
        <Box sx={{ display: 'flex' }}>

            <Drawer open={true}
                anchor="left"
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
                    spacing={2}>
                    <Box sx={{p: "10px"}}>
                        <Button variant="contained" onClick={handleOpen} >Level Info</Button>
                    </Box>
                    <SimulationResult levelData={LevelData[levelId]} userModel={userModel} />
                    
                </Stack>
            </Drawer>

            <Box
                sx={{ flexGrow: 1, height: "100vh", background: "black", overflow: "auto"}}
            >
                <SystemCanvas simulationTimePct={simulationTimePct} userModel={userModel} levelId={levelId} levelData={LevelData[levelId]} />
            </Box>

   
            <Drawer open={true}
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
                   >
                <SystemConfig simulationTimePct={simulationTimePct} userModel={userModel} levelId={levelId} levelData={LevelData[levelId]} setUserModel={setUserModel} />
                    
                </Stack>
            </Drawer>
        </Box>
        </>
    )
};
  
export default LevelView;