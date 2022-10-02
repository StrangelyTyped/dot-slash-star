import React from "react";
import { Typography, Modal, Box } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const InfoCard = (props) => {
  return (
    <Modal
      open={props.modalOpen}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} flexGrow={1}>
        <Typography variant="h9" component="div">
          <p>Level {props.levelId}: {props.levelData.title}</p>
        </Typography>
        <Typography variant="h10" component="div">
          <p>{props.levelData.summary}</p>
        </Typography>
        <Typography variant="h10" component="div">
        <p>{props.levelData.description}</p>
        </Typography>
        <Typography variant="h11" component="div">
          <p>Hint: {props.levelData.hints}</p>
        </Typography>
      </Box>
    </Modal>
  )
}

export default InfoCard;