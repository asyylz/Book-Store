import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function BooksRootLayout() {
  return (
    <div>
      <BooksNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;