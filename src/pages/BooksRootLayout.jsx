import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function BooksRootLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default BooksRootLayout;
