/* -------------- react-router-dom imports -------------- */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* --------------------- Route Pages -------------------- */
import BooksRootLayout from '../layouts/BooksRootLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import RootLayout from '../layouts/RootLayout.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import { action as logoutAction } from '../pages/Logout.jsx';
/* ------------------- loader imports ------------------- */
import { loaderBooks } from '../pages/BooksPage.jsx';
import BooksPage from '../pages/BooksPage.jsx';

import { loaderHomePageBooks } from '../pages/HomePage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import { loaderBook } from '../pages/BookDetailsPage.jsx';
import { loaderUser } from '../pages/UserPages/DashBoard.jsx';
import { loaderFavBooks } from '../pages/UserPages/FavBooksPage.jsx';
import { loaderUserBooks } from '../pages/UserPages/UserBooksPage.jsx';

/* ------------------- import actions ------------------- */
//import { action as logoutAction } from '../pages/Logout.jsx';
//import { action as newRegisterAction } from '../pages/AuthPage.jsx'

/* -------------------------- - ------------------------- */
import BookDetailsPage from '../pages/BookDetailsPage.jsx';
import DashBoard from '../pages/UserPages/DashBoard.jsx';
import FavBooksPage from '../pages/UserPages/FavBooksPage.jsx';
import UserPageLayout from '../layouts/UserPageLayout.jsx';
import UserBooksPage from '../pages/UserPages/UserBooksPage.jsx';
/* ----------------------- router ----------------------- */

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: root,
    children: [
      { index: true, element: <HomePage />, loader: loaderHomePageBooks },
      {
        path: 'books',
        element: <BooksRootLayout />,
        children: [
          {
            index: true,
            element: <BooksPage />,
            loader: loaderBooks,
          },
          {
            path: ':id',
            element: <BookDetailsPage />,
            loader: loaderBook,
          },
        ],
      },
      {
        path: ':userId',
        element: <UserPageLayout />,
        children: [
          {
            index: true,
            element: <DashBoard />,
            loader: loaderUser,
          },
          {
            path: 'favs',
            element: <FavBooksPage />,
            loader: loaderFavBooks,
          },
          {
            path: 'my-e-book',
            element: <UserBooksPage />,
            loader: loaderUserBooks,
          },

          {
            path: 'readingNow',
            element: <UserBooksPage />,
            loader: loaderUserBooks,
          },
          {
            path: 'purchased',
            element: <UserBooksPage />,
            loader: loaderUserBooks,
          },
        ],
      },

      {
        path: 'auth',
        element: <AuthPage />,
      },

      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
