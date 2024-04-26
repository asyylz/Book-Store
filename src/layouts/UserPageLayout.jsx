import { Box, Divider, Typography, ListItem } from '@mui/material';
import UserPageNavigation from '../components/UserPageNavigation';
import { Outlet } from 'react-router-dom';
const drawerWidth = 240;
export default function UserPageLayout() {
  const user = JSON.parse(localStorage.getItem('user')) || '';
  return (
    <div>
      <Box sx={{ ml: `${drawerWidth}px` }}>
        <ListItem>
          <Typography sx={{ fontFamily: 'Oswald' }} variant="h3">
            {`Welcome ${user?.displayName}`}
          </Typography>
        </ListItem>
        <Divider variant="inset" />
      </Box>
      <UserPageNavigation />
      <Box sx={{ ml: `${drawerWidth}px` }}>
        <Outlet />
      </Box>
    </div>
  );
}
