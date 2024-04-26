import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import BookList from '../components/BooksList';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useUserProfileContext } from '../context/UserProfileContext'; // Ensure you have user context

const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;

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




const nodeCache = new Map();
async function fetchCachedData(url) {
  // Check if the cache already has the data for this URL
  if (nodeCache.has(url)) {
    return nodeCache.get(url);
  }
  // Fetch data from the URL if it's not in the cache
  const response = await fetch(url);
  // Properly handle network errors and HTTP status errors
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const resData = await response.json();
  // Consider checking for data consistency before caching
  if (!resData || !resData.items) {
    throw new Error('Invalid data received from API');
  }
  // Cache the retrieved data
  nodeCache.set(url, resData.items); // Ensure that you are caching the correct part of the response

  return resData.items;
}
export async function loaderBooks(request) {
  console.log(request.request.url);

  const splitUrl = request.request.url.split('=');
  const search = splitUrl[1];
  const field = splitUrl[3];
  console.log(search);
  console.log(field);

  const booksUrl = `${BASE_URL}?q=${
    field ? field : 'subject'
  }:${search}&projection=full&key=${apiKey}`;
  const books = await fetchCachedData(booksUrl);

  // const response = await fetch(
  //   //`${BASE_URL}?q=subject:${search}&projection=full&key=${apiKey}`
  //   `${BASE_URL}?q=${
  //     field ? field : 'subject'
  //   }:${search}&projection=full&key=${apiKey}`
  //   //`${BASE_URL}?q=fantasys&orderBy=newest&key=${apiKey}`
  // );
  // const resData = await response.json();
  // console.log(resData.items);
  // if (!response.ok) {
  //   throw json({ message: 'Could not load books...' }, { status: 500 });
  // }
  return { items: books, header: search };
}
