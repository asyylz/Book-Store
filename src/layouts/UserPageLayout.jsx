import { Box, Divider, Typography, ListItem } from '@mui/material';
import UserPageNavigation from '../components/UserPageNavigation';
import { Outlet } from 'react-router-dom';
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
export default function UserPageLayout() {
  const user = JSON.parse(localStorage.getItem('user')) || '';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ml: { xs: 0, sm1: `${drawerWidth}px` } }}>
        <ListItem>
          <Typography sx={{ fontFamily: 'Oswald' }} variant="h3">
            {`Welcome ${user?.displayName}`}
          </Typography>
        </ListItem>
        <Divider variant="inset" />
      </Box>
      <UserPageNavigation />
      <Box sx={{ ml: { xs: 0, sm1: `${drawerWidth}px` } }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
