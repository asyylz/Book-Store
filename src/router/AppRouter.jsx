/* -------------- react-router-dom imports -------------- */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* --------------------- Route Pages -------------------- */
import BooksRootLayout from '../layouts/BooksRootLayout.jsx';
import HomePage from '../pagesMain/HomePage.jsx';
import RootLayout from '../layouts/RootLayout.jsx';
import ErrorPage from '../pagesMain/ErrorPage.jsx';
import { action as logoutAction } from '../pagesMain/Logout.jsx';
/* ------------------- loader imports ------------------- */
import { loaderBooks } from '../pagesMain/BooksPage.jsx';
import BooksPage from '../pagesMain/BooksPage.jsx';

import { loaderHomePageBooks } from '../pagesMain/HomePage.jsx';
import AuthPage from '../pagesMain/AuthPage.jsx';
import { loaderBook } from '../pagesMain/BookDetailsPage.jsx';
//import { loaderUser } from '../pagesUser/DashBoard.jsx';
import UserFavBooksPage from '../pagesUser/UserFavBooksPage.jsx';

//import { loaderFavBooks } from '../layouts/UserPageLayout.jsx';
import { combinedLoader } from '../layouts/UserPageLayout.jsx';
/* ------------------- import actions ------------------- */

/* -------------------------- - ------------------------- */
import BookDetailsPage from '../pagesMain/BookDetailsPage.jsx';
import DashBoard from '../pagesUser/DashBoard.jsx';
import UserPageLayout from '../layouts/UserPageLayout.jsx';
import UserEBooksPage from '../pagesUser/UserEbooksPage.jsx';
import UserPurchasedBooksPage from '../pagesUser/UserPurchasedBooksPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
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
        id: 'user',
        element: (
          <PrivateRoute>
            <UserPageLayout />
          </PrivateRoute>
        ),
        loader: combinedLoader,
        children: [
          {
            index: true,
            element: <DashBoard />,
            //loader: loaderUser,
          },
          {
            path: 'favs',
            element: <UserFavBooksPage />,
            //loader: loaderFavBooks,
          },
          {
            path: 'my-e-book',
            element: <UserEBooksPage />,
            //loader: loaderFavBooks,
          },

          {
            path: 'purchased',
            element: <UserPurchasedBooksPage />,
            //loader: loaderFavBooks,
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
