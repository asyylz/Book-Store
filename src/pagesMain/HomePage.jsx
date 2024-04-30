/* ------------------ react-router-dom-imports ------------------ */
import { useLoaderData } from 'react-router-dom';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

/* ----------------- material ui imports ---------------- */
import { Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonCustom from '../componentsUI/ButtonCustom';
import SwiperCustom from '../componentsUI/SwiperCustom';
/* -------------------- react imports ------------------- */

/* -------------------------- helper actions ------------------------- */
import { fetchCachedData } from '../utils/helperActions';

/* --------------------- url imporst -------------------- */
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;
/* ------------------- section book imports ------------------ */
const bookSection = [
  { id: 1, name: 'Children books' },
  { id: 2, name: 'Thriller books' },
  { id: 3, name: 'Psychology books' },
  { id: 4, name: 'Fantasy books' },
  { id: 5, name: 'Self-Help books' },
  { id: 6, name: 'Fiction books' },
  { id: 7, name: 'E-Books' },
  { id: 8, name: 'Free E-Books books' },
];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '10px',
  textAlign: 'center',
}));

export default function HomePage() {
  const { newestBooks, popularBooks } = useLoaderData();
  console.log(popularBooks);

  return (
    <>
      {/* --------------------- Top Section -------------------- */}
      <Box
        sx={{
          margin: { xs: ' 3rem' },
          fontFamily: 'Oswald',
        }}
      >
        {/* <Grid container spacing={2} sx={{ border: '1px solid red' }}> */}
        <Grid
          container
          spacing={0}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* ------------------------ Left ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              .filter((_, index) => index > 3)
              .map((book) => (
                <Grid
                  item
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  key={book.id}
                >
                  <Item>
                    <ButtonCustom
                      buttonName={book.name}
                      id={book.id}
                      to={book.name}
                      side="left"
                    />
                  </Item>
                </Grid>
              ))}
          </Grid>
          {/* ------------------------ Middle ------------------------*/}
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <Carousel
              sx={{
                display: { xs: 'none', sm: 'flex' },
                width: { sm: '100%' },
                minHeight: { sm: '350px' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {popularBooks?.map((book) => (
                <Box
                  key={book.volumeInfo.title}
                  sx={{
                    height: { sm: '300px', md: '400px' },
                    width: { sm: '80%', md: '80%' },
                    m: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Oswald',
                      mb: '10px',
                      fontSize: { sm: '16px' },
                    }}
                  >
                    Author Of The Week
                  </Typography>
                  <img
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                    style={{ maxWidth: '100%', height: '100%' }}
                  />
                  <h2 style={{ textAlign: 'center' }}>
                    {book.volumeInfo.title}
                  </h2>
                </Box>
              ))}
            </Carousel>
          </Grid>

          {/* ------------------------ Right ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              ?.filter((_, index) => index < 4)
              .map((book) => (
                <Grid
                  item
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  key={book.id}
                >
                  <Item>
                    <ButtonCustom
                      buttonName={book.name}
                      id={book.id}
                      to={book.name}
                      side="right"
                      //to="books"
                    />
                  </Item>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Box>
      {/* -------------- Recommendations  Section -------------- */}
      <Box sx={{ mt: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Oswald',
                mt: '1rem',
                fontSize: { xs: '16px', md: '1.7rem' },
              }}
              variant="h4"
            >
              Discover newest releases...
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SwiperCustom books={newestBooks} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const nodeCache = new Map();
export async function loaderHomePageBooks() {
  try {
    const popularBooksUrl = `${BASE_URL}?q=inauthor:"Roald Dahl"&key=${apiKey}`;
    const newestBooksUrl = `${BASE_URL}?q=subject:fiction&orderBy=newest&key=${apiKey}`;

    const popularBooks = await fetchCachedData(popularBooksUrl, nodeCache);
    const newestBooks = await fetchCachedData(newestBooksUrl, nodeCache);
    console.log(popularBooks);

    return { newestBooks, popularBooks };
  } catch (error) {
    console.error('Failed to load book data:', error);
    return { newestBooks: [], popularBooks: [], error: error.message };
  }
}
