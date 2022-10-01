import React from "react"
import AddIcon from '@mui/icons-material/Add'
import { Typography, Toolbar, IconButton, Menu, MenuItem, Divider, Box } from '@mui/material';


const SystemConfig = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Solar System
                </Typography>
                <IconButton 
                    id="system-config-add"
                    aria-label="add option"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <AddIcon />
                </IconButton>
                <Menu
                    id="system-config-add-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'system-config-add',
                    }}
                >
                    <MenuItem onClick={handleClose}>Planet</MenuItem>
                    <MenuItem onClick={handleClose}>Sunspot</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Pulsation</MenuItem>
                </Menu>
            </Toolbar>
            <Box style={{flexGrow: 1}}>Stuff</Box>
        </>
    );

};
  
export default SystemConfig;