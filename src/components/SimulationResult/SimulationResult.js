import React from "react"
import { Typography, Paper } from '@mui/material';
import LightChart from "../LightChart/LightChart";
import { simulate } from "../../data/CelestialMath";
import { CHART_RESOLUTION_YEARS } from "../../data/Constants";

const SimulationResult = (props) => {
    const simulationDataUser = simulate(CHART_RESOLUTION_YEARS, props.userModel)
    const simulationDataLevel = simulate(CHART_RESOLUTION_YEARS, props.levelData.levelConfig.goal)

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
