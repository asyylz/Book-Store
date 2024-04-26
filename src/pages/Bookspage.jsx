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
  const { user, favBookIds } = useUserProfileContext();

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
  const splitUrl = request.request.url.split('=');
  const search = splitUrl[1];
  const field = splitUrl[3];
  const booksUrl = `${BASE_URL}?q=${
    field ? field : 'subject'
  }:${search}&projection=full&key=${apiKey}`;
  const books = await fetchCachedData(booksUrl, nodeCache);
  return { items: books, header: search };
}
