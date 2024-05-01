import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Cart from '../componentsCart/Cart';
import { ToastContainer } from 'react-toastify';
import { Box } from '@mui/material';

import Footer from '../components/Footer';
import Checkout from '../componentsCart/Checkout';
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
      <Checkout />
      <Box>
        {/* Solution-1 for loadin state  */}
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
export default RootLayout;
