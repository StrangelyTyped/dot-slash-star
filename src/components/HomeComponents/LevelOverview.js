import LevelData from "../../data/levels";
import { Paper, Stack, Typography } from '@mui/material';

const LevelOverview = (props) => {
    let level = LevelData[props.level + 1]
    
    if (level === undefined) {
        return <p>UNKNOWN</p>
    }

    return (
        <Paper>
            <Stack
                direction="column"
                spacing={2}
                padding={1}
                alignItems="center"
            >
                <Typography variant="h6" component="h6">
                    {level.title}
                </Typography>
                <Typography variant="body1" component="p">
                    {level.summary}
                </Typography>
            </Stack>
        </Paper>
    )
}

export default LevelOverview;