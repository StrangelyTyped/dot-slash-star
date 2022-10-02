import { Box, Drawer, Paper, Stack } from '@mui/material';
import LevelSelect from '../components/HomeComponents/LevelSelect';
import LevelOverview from '../components/HomeComponents/LevelOverview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Typography from '@mui/material/Typography';
import React from "react";

const DRAWER_WIDTH_PERCENT = 25;

const Home = () => {
  const [level, setLevel] = React.useState(0)

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, height: "100vh"}}
      >
        <LevelSelect
          width={window.innerWidth * (1 - DRAWER_WIDTH_PERCENT / 100)}
          height={window.innerHeight}
          onHover={(level) => {
            setLevel(level)
          }}
        />
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
          padding={2}
          alignItems="center"
        >
          <Stack direction="row" style={{maxHeight: "150px"}} justifyContent="center" alignItems="center">
              <img src="/nasa-spaceapps-logo-circle.png" style={{height: "100%", width: "auto"}} onClick={() => window.location.href = "https://www.spaceappschallenge.org/"} />
          </Stack>
          <Typography variant="h4" component="h4">
            Dot Slash Star
          </Typography>
          <Typography variant="subtitle1" component="p">
            Twinkle, Twinkle, Little Star
          </Typography>
          {/* <Box sx={{ flexGrow: 1}} /> */}
          <Typography variant="body1" component="p">
            Learn about variable stars, how we use light curves to measure how stars are changing and how they're used to detect exoplanets.
          </Typography>
          {/* <Box sx={{ flexGrow: 1}} /> */}
          <Box sx={{ flexGrow: 1}} />
          <Box paddingBottom={2}>
            <LevelOverview level={level} />
          </Box>
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