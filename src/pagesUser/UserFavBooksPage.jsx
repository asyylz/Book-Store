import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get, onValue } from 'firebase/database';
import BookCard from '../components/BookCard';
import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UserFavBooksPage() {
  const { favBooks: initialFavBooks, user } = useLoaderData();
  const [favBooks, setFavBooks] = useState(initialFavBooks);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is available
    const db = getDatabase();
    const favBooksRef = ref(db, `users/${user.uid}/favBooks`);

    // Listener for real-time updates
    const unsubscribe = onValue(
      favBooksRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const updatedBooks = snapshot.val();
          setFavBooks(updatedBooks);
        } else {
          setFavBooks([]); // Handle no data scenario
        }
      },
      (error) => {
        console.error('Failed to fetch fav books:', error);
      }
    );

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
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

export async function loaderFavBooks() {
  const user = JSON.parse(localStorage.getItem('user'));

  const db = getDatabase();
  const favBooksRef = ref(db, `users/${user.uid}/favBooks`);
  try {
    const snapshot = await get(favBooksRef);
    if (snapshot.exists()) {
      const favBooks = snapshot.val();

      return { favBooks, user };
    } else {
      console.log('No data available');
      return {};
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
}
