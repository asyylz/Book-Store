import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function BookDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Book Details</h1>
      <p> {params.id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export async function loaderBook() {
  const id = params.id;
  console.log(id)
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );
  // ASK loader function allows  not to manually extract the resposne
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return { resData };
}
