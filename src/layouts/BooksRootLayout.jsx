import { Outlet } from 'react-router-dom';
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
