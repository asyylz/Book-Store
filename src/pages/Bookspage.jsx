import { json, useLoaderData } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;
import BookList from '../components/BooksList';
export default function BooksPage() {
  const { books } = useLoaderData();

  return <BookList searchedBooks={books} />;
}

async function loaderBooks() {
  const response = await fetch(`${BASE_URL}q=fantasy`);
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  console.log(resData.item);
  return resData.item;
}
