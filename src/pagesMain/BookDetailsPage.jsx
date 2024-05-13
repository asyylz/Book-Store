import { useLoaderData } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function BookDetailsPage() {
  const { book } = useLoaderData();
  //const { items, header } = useRouteLoaderData('books');
  //console.log(items);
  //const { id } = useParams();

  return (
    <>
      <Link to={-1} relative="path">
        <Button
          sx={{
            backgroundColor: '#F2F0EB',
            color: 'gray',
            '&:hover': { color: '#F29F05', backgroundColor: 'inherit' },
            fontSize: { xs: '8px', sm: '14px' },
            width: { xs: '80px', sm: '200px' },
            margin: {xs:'2rem',sm:'3rem'},
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
  console.log(params)
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
