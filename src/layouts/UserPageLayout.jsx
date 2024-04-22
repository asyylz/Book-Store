import { Box } from '@mui/material';
import UserPageNavigation from '../components/UserPageNavigation';
import { Outlet } from 'react-router-dom';
const drawerWidth = 240;
export default function UserPageLayout() {
  return (
    <div>
      <UserPageNavigation />
      <Box sx={{ ml: `${drawerWidth}px`  }}>
        <Outlet />
      </Box>
    </div>
  );
}
