import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import UserPageMenuList from './UserPageMenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const drawerWidth = 240;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // extra-small devices
      sm1: 787,
      sm2: 856, // small devices (customized from 600px to 480px)
      md: 900, // medium devices (customized from 900px to 768px)
      lg: 1066, // large devices (customized from 1200px to 1024px)
      xl: 1173, // extra-large devices (customized from 1536px to 1440px)
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
              sm1: '190px',
              sm2: '170px',
              md: '200px',
              lg: '150px',
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
