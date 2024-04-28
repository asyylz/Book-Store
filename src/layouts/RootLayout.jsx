import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Cart from '../componentsCart/Cart';
import { ToastContainer } from 'react-toastify';
import { Box, CssBaseline, Container } from '@mui/material';
import { Padding } from '@mui/icons-material';
import Footer from '../components/Footer';
function RootLayout() {
  const navigation = useNavigation();
  navigation.state === 'loading';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <ToastContainer />
      <MainNavigation />
      <Cart />
      <Box sx={{ paddingTop: '0' }}>
        {/* Solution-1 for loadin state  */}
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
export default RootLayout;
