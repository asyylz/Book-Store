import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookList from '../components/BooksList';
import { Outlet } from 'react-router-dom';
import { useUserProfileContext } from '../context/UserProfileContext'; // Ensure you have user context

const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;
import { fetchCachedData } from '../utils/helperActions';
import { useLocation } from 'react-router-dom';

const nodeCache = new Map();

export default function BooksPage() {
  
  const location = useLocation();
  const { items, header } = useLoaderData();
  const { favBooksUpdated } = useUserProfileContext(); //favBookIds removed

  const favBookIds = favBooksUpdated?.map((book) => book.id);

  return (
    <div 
    //style={{ scaleX: scrollYProgress }}
     key={location.pathname}>
      <BookList
        searchedBooks={items.map((book) => ({
          ...book,
          isFav: favBookIds.includes(book.id),
        }))}
        header={header}
      />
      <Outlet />
    </div>
  );
}

export async function loaderBooks({ request }) {
  const requestedUrl = request.url.split('?');
  const booksUrl = `${BASE_URL}?${requestedUrl[1]}&key${apiKey}`;

  const books = await fetchCachedData(booksUrl, nodeCache);

  return { items: books, header: 'Your search results' };

  //TODOsoon result will be dynamically updated
}
