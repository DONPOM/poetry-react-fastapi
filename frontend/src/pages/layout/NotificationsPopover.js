
import Badge from '@mui/material/Badge';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';


import * as React from 'react';

const PopoverWidth = 400;


const NotificationsPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const showNotifications = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notifications-popover' : undefined;

    return (
      <>
          <Badge
            badgeContent={4}
            color="secondary"
            aria-describedby={id}
            onClick={showNotifications}
            >
                <NotificationsIcon />
          </Badge>
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
              <Box
                sx={{ width: PopoverWidth }}>
                <List disablePadding>
                <ListItem dense={true} sx={{backgroundColor: 'secondary.main'}} >
                <ListItemText primary={<Typography variant='subtitle1' style={{ fontWeight: 'medium' }}>Notifications</Typography>} />
                </ListItem>

                  <Divider />
                  <ListItem dense={true} disablePadding>
                    <ListItemButton>
                    <ListItemText
                        primary="Notification Title"
                        secondary='This is the description of the notification that is displayed to the user'
                      />
                      <Box style={{ padding: 5 }} ><ListItemText primary="Tue" type="light"/></Box>
                    </ListItemButton>
                  </ListItem>
                  <ListItem to='/settings' dense={true} disablePadding>
                  <ListItemButton>
                    <ListItemText
                        primary="Notification Title"
                        secondary='This is the description of the notification that is displayed to the user'
                      />
                      <Box style={{ padding: 5 }} ><ListItemText primary="Tue" type="light"/></Box>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem alignItems='center' dense={true} disablePadding>
                    <ListItemButton sx={{textAlign: 'center'}}>
                      <ListItemText type='primary' primary="View All" />
                    </ListItemButton>
                  </ListItem>
                </List>
                
            </Box>

          </Popover>
      </>
    );
  };
  
  export default NotificationsPopover;