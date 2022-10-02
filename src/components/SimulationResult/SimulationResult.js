import React from "react"
import { Typography, Paper } from '@mui/material';
import LightChart from "../LightChart/LightChart";
import { simulate } from "../../data/CelestialMath";


const SimulationResult = (props) => {
    const simulationDataUser = simulate(0.001, props.userModel)
    const simulationDataLevel = simulate(0.001, props.levelData.levelConfig.goal)

    return (
        <>
            <Paper>
                <Typography variant="h4">Score: 20%</Typography>
            </Paper>
            <LightChart title="Simulation Result" data={simulationDataUser} />
            <LightChart title="Your Objective" data={simulationDataLevel} />
        </>
    );
}

export default React.memo(SimulationResult)
