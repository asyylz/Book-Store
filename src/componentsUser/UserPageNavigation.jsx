import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import UserPageMenuList from './UserPageMenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const drawerWidth = 240;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm1: 800,
      sm2: 856, 
      md: 900, 
      lg: 990, 
      xl: 1173,
    },
  },
});
export default function UserPageNavigation() {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm1: 'block' }, // sm:'block'
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            position: 'absolute',
            top: {
              sm1: '170px',
              sm2: '130px',
              md: '130px',
              lg: '80px',
              xl: '80px',
            },
            //border: '1px solid red',
          },
        }}
        open
      >
        <UserPageMenuList />
      </Drawer>
    </ThemeProvider>
  );
}
