import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import UserPageMenuList from './UserPageMenuList';

const drawerWidth = 240;

export default function UserPageNavigation() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { sm: 'none' ,sm:'block'}, // sm:'block'
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          position: 'absolute',
          top: '80px',

        },
      }}
      open
    >
      <UserPageMenuList />
    </Drawer>
  );
}
