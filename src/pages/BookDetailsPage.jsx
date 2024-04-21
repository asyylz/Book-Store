import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function BookDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Book Details</h1>
      <p> {params.bookId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export function loaderBook() {}
