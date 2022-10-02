import { Box, Drawer, Paper, Stack } from '@mui/material';
import LevelSelect from '../components/HomeComponents/LevelSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Typography from '@mui/material/Typography';
import React from "react";

const DRAWER_WIDTH_PERCENT = 25;

const Home = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, height: "100vh"}}
      >
        <LevelSelect width={window.innerWidth * (1 - DRAWER_WIDTH_PERCENT / 100)} height={window.innerHeight} />
      </Box>

      <Drawer open="true"
        anchor="right"
        variant="permanent"
        sx={{
          width: `${DRAWER_WIDTH_PERCENT}%`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${DRAWER_WIDTH_PERCENT}%`,
            boxSizing: 'border-box',
          }
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          style={{height: "100%"}}
          paddingTop={2}
          paddingBottom={2}
          alignItems="center"
        >
          <Stack direction="row" style={{maxHeight: "150px"}} justifyContent="center" alignItems="center">
              <img src="/nasa-spaceapps-logo-circle.png" style={{height: "100%", width: "auto"}} onClick={() => window.location.href = "https://www.spaceappschallenge.org/"} />
          </Stack>
          <Paper>Space Apps Image + Link</Paper>
          <Typography variant="h4" component="h4">
            h4. Heading
          </Typography>;
          <Paper>Dot Slash Star</Paper>
          <Paper>Description</Paper>
          <Paper>This web app shows... long words...</Paper>
          <Paper>Level Overview here</Paper>
          <Box sx={{ flexGrow: 1}} />
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/StrangelyTyped/dot-slash-star" style={{color: "black", verticalAlign: "middle"}}>GitHub - StrangelyTyped/dot-slash-star</a>
          </Stack>
        </Stack>
      </Drawer>
      </Box>
    </>
  )
}

export default Home;