import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import BookList from '../components/BooksList';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useUserProfileContext } from '../context/UserProfileContext'; // Ensure you have user context

const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;

/* -------------------------- helper actions ------------------------- */
import { fetchCachedData } from '../utils/helperActions';
const nodeCache = new Map();
export default function BooksPage() {
  const { items, header } = useLoaderData();
  const { user, favBooksUpdated } = useUserProfileContext(); //favBookIds removed
  const favBookIds = favBooksUpdated.map((book) => book.id);
  return (
    <BookList
      searchedBooks={items.map((book) => ({
        ...book,
        isFav: favBookIds.includes(book.id),
      }))}
      header={header}
    />
  );
}

export async function loaderBooks(request) {
  const requestedUrl = request.request.url.split('?');
  console.log(requestedUrl[1]);
  const splitUrl = request.request.url.split('=');
  const search = splitUrl[1];
  const field = splitUrl[3];
  console.log(search);
  console.log(field);
  const booksUrl = `${BASE_URL}?${requestedUrl[1]}&key${apiKey}`;
  console.log(booksUrl)
  const books = await fetchCachedData(booksUrl, nodeCache);

  return { items: books, header: 'Your search results' };

  //TODOsoon result will be dynamically updated
}
