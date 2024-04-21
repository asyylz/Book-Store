import { json, useLoaderData } from 'react-router-dom';
import BookList from '../components/BooksList';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;


export default function BooksPage() {
  const { items, header } = useLoaderData();
  return <BookList searchedBooks={items} header={header} />;
}

export async function loaderBooks(request) {
  const splitUrl = request.request.url.split('=');
  const category = splitUrl[1];

  const response = await fetch(
    `${BASE_URL}q=${category}+subject&projection=full&key=${apiKey}`
  );
  // ASK loader function allows  not to manually extract the resposne
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
   
  }
  return { items: resData.items, header: category };
}
