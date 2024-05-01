import { Box, Grid, Typography, Rating } from '@mui/material';
import { Link, useLoaderData } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function BookDetailsPage() {
  const { book } = useLoaderData();
  return (
    <>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
        {/* <p> {book.id}</p> */}
      </p>
      <Typography variant='h5'
        sx={{ textAlign: 'center', mb: '20px', fontFamily: 'Oswald' }}
      >
        {book.volumeInfo.title}
      </Typography>
      <Grid container sx={{marginLeft: 1 }} xs={12}>
        <Grid item xs={5} sx={{textAlign: 'center' }}>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            style={{
              borderRadius: '10px',
            }}
          />
          <Box
            sx={{ fontFamily: 'Oswald', textAlign: 'start', padding: '5px' }}
          >
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Author:</strong>
              {book.volumeInfo.authors[0]}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Category:</strong>
              {book.volumeInfo.categories[0]}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Publisher:</strong>
              {book.volumeInfo.publisher}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Page:</strong>
              {book.volumeInfo.pageCount}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Published date:</strong>
              {book.volumeInfo.publishedDate}
            </Typography>

            {!book.saleInfo.isEbook ? (
              <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
                {' '}
                <strong style={{ fontSize: '18px' }}>Digital:</strong>
                Available
              </Typography>
            ) : null}
            <Rating
              sx={{ textAlign: 'center' }}
              name="read-only"
              value={book.volumeInfo.averageRating ?? 4}
              readOnly
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            //border: '1px solid green',
            padding: '10px',
            fontFamily: 'Oswald',
          }}
        >
          {book.volumeInfo.description}
        </Grid>
      </Grid>
    </>
  );
}

export async function loaderBook({ request, params }) {
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
