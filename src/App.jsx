import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksPage from "./pages/Bookspage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: BooksPage,
    id: root,
    children: [
      { index, element: <HomePage /> },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
