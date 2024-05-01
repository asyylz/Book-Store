import { Outlet } from 'react-router-dom';
function BooksRootLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
export default BooksRootLayout;
