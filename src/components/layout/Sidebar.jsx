import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
export default function Sidebar({isOpen,closeSidebar}) {
  return (
    <Drawer anchor='right' open={isOpen} onClose={closeSidebar}>
        <Box sx={{ width: 300 }} role="presentation" 
            onClick={closeSidebar}
        >
      <List>
        {['about', 'home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton LinkComponent={Link} to={'/' + text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InfoIcon /> : <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['about', 'home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton LinkComponent={Link} to={'/' + text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InfoIcon /> : <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </Drawer>
  );
};