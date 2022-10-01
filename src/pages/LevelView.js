import { Box, Drawer, Paper, Stack } from '@mui/material';
import SystemCanvas from '../components/SystemCanvas/SystemCanvas';
import SystemConfig from '../components/SystemConfig/SystemConfig';
import LevelData from "../data/levels";
import AddPlannet from "../components/ControlComponents/AddPlanet"

const drawerWidth = "25%";

const LevelView = (props) => {


    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <Box
                component="main"
                sx={{ flexGrow: 1, height: "100vh", }}
            >
                <SystemCanvas levelId={props.level} levelData={LevelData[props.level]} />
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
                    <AddPlannet />
                    <Paper>Chart 1 Here</Paper>
                    <Paper>Chart 2 Here</Paper>
                </Stack>
            </Drawer>
        </Box>
        </>
    )
};
  
export default LevelView;