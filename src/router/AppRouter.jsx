import { useAuthContext } from '../context/AuthContext';
/* -------------- react-router-dom imports -------------- */
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

/* --------------------- Route Pages -------------------- */

import HomePage from '../pages/HomePage.jsx';
import RootLayout from '../pages/RootLayout.jsx';
import { action as logoutAction } from '../pages/Logout.jsx';
/* ------------------- loader imports ------------------- */
import BooksPage, { loaderBooks } from '../pages/BooksPage.jsx';
import { loaderHomePageBooks } from '../pages/HomePage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import { loaderBook } from '../pages/BookDetailsPage.jsx';

/* ------------------- import actions ------------------- */
//import { action as logoutAction } from '../pages/Logout.jsx';
import UserPage from '../pages/UserPage.jsx';
import BookDetailsPage from '../pages/BookDetailsPage.jsx';
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
        path: 'books/:bookId',
        element: <BookDetailsPage />,
        //loader: loaderBook,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },

      {
        path: 'logout',
        action: logoutAction,
      },
      {
        path: 'account',
        element: <UserPage />,
      },
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
