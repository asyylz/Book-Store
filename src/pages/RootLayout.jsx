import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function RootLayout() {
  const navigation = useNavigation();
  //navigation.state === 'loading'
  return (
    <div>
      <MainNavigation />
      <main>
      {/* Solution-1 for loadin state */}
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;
