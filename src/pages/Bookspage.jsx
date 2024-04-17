import { json } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKey;
export default function BooksPage() {
  return <div>Books Page</div>;
}

export async function loaderBooks() {
  const response = await fetch(BASE_URL + apiKey);
  console.log(response);

  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return response.json();
}
