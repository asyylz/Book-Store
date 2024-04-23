import { useLoaderData } from 'react-router-dom';
import { useUserProfileContext } from '../../context/UserProfileContext';
import { getDatabase, ref, get } from 'firebase/database';
import BookCard from '../../components/BookCard';
import { Box, Container, Grid } from '@mui/material';

export default function FavBooksPage() {
  const { favBooks } = useLoaderData();
  return (
    <Box sx={{ mb: '2rem' }}>
      <Grid container spacing={3} columnSpacing={3} m={3} width='80vw'>
        {favBooks.map((book) => (
          <Grid item xs={12} md={6} lg={5} xl={4} key={book.id}>
            <BookCard {...book} isFav />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export async function loaderFavBooks() {
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
