import { useLoaderData } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function BookDetailsPage() {
  const { book } = useLoaderData();
  return (
    <>
      <Link to=".." relative="path">
        <Button
          sx={{
            backgroundColor: '#F2F0EB',
            color: 'gray',
            '&:hover': { color: '#F29F05', backgroundColor: 'inherit' },
            fontSize: { xs: '10px', sm: '14px' },
            width: { xs: '100px', sm: '200px' },
            margin:'1rem'
          }}
          variant="contained"
        >
          Back to Main Page
        </Button>
      </Link>
      <BookDetail book={book} />
    </>
  );
}

export async function loaderBook({ _, params }) {
  const id = params.id;
  console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`);
  // ASK loader function allows  not to manually extract the resposne
  const resData = await response.json();
  console.log(resData);
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return { book: resData };
}
