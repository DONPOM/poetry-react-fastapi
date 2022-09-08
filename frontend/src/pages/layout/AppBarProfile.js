
import Avatar from '@mui/material/Avatar';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


import * as React from 'react';

const PopoverWidth = 200;

const AppBarProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const showSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

    return (
      <>
        <Avatar
          alt="User Name"
          src="/images/user.jpg"
          sx={{ width: 30, height: 30 }}
          aria-describedby={id}
          onClick={showSettings}
          />
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{
                margin: 1,
              }}
            >
              <Box sx={{ width: PopoverWidth }}>
                <List>
                <ListItem dense={true}>
                <ListItemText primary={<Typography type="primary" style={{ fontWeight: '550' }}>Brendon Roberts Pomeroy</Typography>} />
                </ListItem>
                <ListItem dense={true}>
                <ListItemText primary="Administrator" />
                </ListItem>
                  <Divider />
                  <ListItem dense={true} disablePadding>
                    <ListItemButton to='/profile'>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem dense={true} disablePadding>
                    <ListItemButton to='/settings'>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem dense={true} disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Log Out" />
                    </ListItemButton>
                  </ListItem>
                </List>
                
            </Box>

          </Popover>
      </>
    );
  };
  
  export default AppBarProfile;