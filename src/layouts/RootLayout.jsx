import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Cart from '../componentsCart/Cart';
import { ToastContainer } from 'react-toastify';
function RootLayout() {
  const navigation = useNavigation();
  navigation.state === 'loading';
  return (
    <div>
      <ToastContainer />
      <MainNavigation />
      <Cart />
      <main>
        {/* Solution-1 for loadin state  */}
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;
