import './App.css';
/* -------------- react-router-dom imports -------------- */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* --------------------- Route Pages -------------------- */
import BooksPage from './pages/Bookspage.jsx';
import HomePage from './pages/HomePage.jsx';
import RootLayout from './pages/RootLayout.jsx';
import AuthenticationPage from './pages/AuthenticationPage.jsx';

/* ------------------- loader imports ------------------- */
import { loaderBooks } from './pages/Bookspage.jsx';
import { loaderHomePageBooks } from './pages/HomePage.jsx';
import { actionLogin } from './pages/AuthenticationPage.jsx';

/* ----------------------- router ----------------------- */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: root,

    children: [
      { index: true, element: <HomePage />, loader: loaderHomePageBooks },
      {
        path: 'books',
        element: <BooksPage />,
        loader: loaderBooks,
      },
      {
        path: 'login',
        element: <AuthenticationPage />,
        action: actionLogin,
      },
      {
        path: 'logout',
        //action: logoutAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
