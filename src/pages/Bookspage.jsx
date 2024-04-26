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

export async function loaderBooks(request) {
  console.log(request.request.url);

  const splitUrl = request.request.url.split('=');
  const search = splitUrl[1];
  const field = splitUrl[3];
  console.log(search);
  console.log(field);
  const response = await fetch(
    //`${BASE_URL}?q=subject:${search}&projection=full&key=${apiKey}`
    `${BASE_URL}?q=${
      field ? field : 'subject'
    }:${search}&projection=full&key=${apiKey}`
    //`${BASE_URL}?q=fantasys&orderBy=newest&key=${apiKey}`
  );
  const resData = await response.json();
  console.log(resData.items);
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return { items: resData.items, header: search };
}
