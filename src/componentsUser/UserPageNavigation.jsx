import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import UserPageMenuList from './UserPageMenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItemCustom from '../componentsUI/MenuItemCustom';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm1: 800,
      sm2: 856,
      md: 900,
      md2: 919,
      lg: 990,
      xl: 1131,
    },
  },
});

const links = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Favorites',
    path: 'favs',
  },
  {
    label: 'My e-books',
    path: 'my-e-book',
  },
  {
    label: 'Purchased',
    path: 'purchased',
  },
];
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
            height: '100vh',
            position: 'absolute',
            top: {
              sm1: '150px',
              sm2: '150px',
              md: '190px',
              md2: '155px',
              lg: '150px',
              xl: '150px',
            },
          },
        }}
        open
      >
        <UserPageMenuList />
      </Drawer>
      <MenuItemCustom menuList={links} mode="nav" />
    </ThemeProvider>
  );
}
