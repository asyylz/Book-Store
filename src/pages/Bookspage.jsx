import { json, useLoaderData } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;
import BookList from '../components/BooksList';
import { useSearchParams, useNavigation } from 'react-router-dom';
export default function BooksPage() {
  const { items } = useLoaderData();
  return <BookList searchedBooks={items} />;
}

export async function loaderBooks(request) {
  const category = request.request.url.split('=');
  //console.log(category)

  //const response = await fetch(`${BASE_URL}q=fantasy+terms`);
  const response = await fetch(`${BASE_URL}q=${category[1]}`);
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  console.log(resData.items);
  return resData;
}
