import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import BookCard from '../components/BookCard';
import { Box, Grid } from '@mui/material';

export default function UserBooksPage() {
  const { favBooks } = useLoaderData();
  return (
    <Box sx={{ mb: '2rem' }}>
      <Grid container spacing={3} columnSpacing={3} m={3} width="80vw">
        {favBooks.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            xl={3}
            key={book.id}
            sx={{
              m: { md: 'auto', lg: 'unset', xl: 'unset' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BookCard {...book} isFav />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export async function loaderUserBooks() {
  const user = JSON.parse(localStorage.getItem('user'));

  const db = getDatabase();
  const favBooksRef = ref(db, `users/${user.uid}/favBooks`);
  try {
    const snapshot = await get(favBooksRef);
    if (snapshot.exists()) {
      const favBooks = snapshot.val();
      console.log(favBooks);
      return { favBooks };
    } else {
      console.log('No data available');
      return {};
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
}
