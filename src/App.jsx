import './App.css';
/* -------------- react-router-dom imports -------------- */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* --------------------- Route Pages -------------------- */
import BooksPage from './pages/Bookspage.jsx';
import HomePage from './pages/HomePage.jsx';
import RootLayout from './pages/RootLayout.jsx';

/* ------------------- loader imports ------------------- */
import { loaderBooks } from './pages/Bookspage.jsx';
import { loaderPopularBooks } from './pages/HomePage.jsx';

/* ----------------------- router ----------------------- */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: root,
    children: [
      { index: true, element: <HomePage />,
    loader:loaderPopularBooks },
      {
        path: 'books',
        element: <BooksPage />,
        loader: loaderBooks,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
