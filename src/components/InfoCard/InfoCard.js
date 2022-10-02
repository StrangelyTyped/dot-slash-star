import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const InfoCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Level {props.levelId}: {props.title}
        </Typography>
        <Typography variant="h6" component="div">
          Summary: {props.summary}
        </Typography>
        <Typography variant="h6" component="div">
          Description: {props.description}
        </Typography>
        <Typography variant="h7" component="div">
          Hint: {props.hints}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoCard;