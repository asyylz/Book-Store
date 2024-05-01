import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchCachedData } from '../utils/helperActions';
const nodeCache = new Map();
import React, { useState, useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;
function BooksRootLayout() {
  //const { items, header } = useLoaderData();

  return (
    <main>
      <Outlet />
    </main>
  );
}
export default BooksRootLayout;

// export async function loaderBooks(request) {
//   const requestedUrl = request.request.url.split('?');
//   console.log(requestedUrl[1]);
//   const splitUrl = request.request.url.split('=');
//   const search = splitUrl[1];
//   const field = splitUrl[3];
//   const booksUrl = `${BASE_URL}?${requestedUrl[1]}&key${apiKey}`;
//   console.log(booksUrl);
//   const books = await fetchCachedData(booksUrl, nodeCache);

//   return { items: books, header: 'Your search results' };

//   //TODOsoon result will be dynamically updated
// }
