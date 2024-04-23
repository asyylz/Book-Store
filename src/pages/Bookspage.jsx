import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import BookList from '../components/BooksList';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useUserProfileContext } from '../context/UserProfileContext'; // Ensure you have user context

const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;

export default function BooksPage() {
  const { items, header } = useLoaderData();
  console.log(items)
  const { user } = useUserProfileContext();
  const [favBookIds, setFavBookIds] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const favBooksRef = ref(db, `users/${user.uid}/favBooks`);

    const unsubscribe = onValue(favBooksRef, snapshot => {
      const favBooks = snapshot.val() || [];
      const favBookIds = favBooks.map(book => book.id); // Assuming each book has an 'id' field
      setFavBookIds(favBookIds);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [user.uid]);

  return (
    <BookList searchedBooks={items.map(book => ({
      ...book,
      isFav: favBookIds.includes(book.id)
    }))} header={header} />
  );
}

export async function loaderBooks(request) {
  const splitUrl = request.request.url.split('=');
  const category = splitUrl[1];

  const response = await fetch(
    `${BASE_URL}?q=subject:${category}&projection=full&key=${apiKey}`
  );
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return { items: resData.items, header: category };
}
