/* ------------------ react-router-dom-imports ------------------ */
import { json, useLoaderData } from 'react-router-dom';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import Footer from '../components/UI/Footer';

/* ----------------- material ui imports ---------------- */
import { IconButton, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonCustom from '../components/UI/ButtonCustom';
import SwiperCustom from '../components/UI/SwiperCustom';

/* -------------------- react imports ------------------- */

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
];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '10px',
  textAlign: 'center',
}));

export default function HomePage() {
  const { newestBooks, popularBooks } = useLoaderData();

  return (
    <>
      {/* --------------------- Top Section -------------------- */}
      <Box
        sx={{
          flexGrow: 1,
          mt: '1rem',
          ml: '4rem',
          mr: '4rem',
          fontFamily: 'Oswald',
        }}
      >
        <Grid container spacing={2}>
          {/* ------------------------ Left ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              .filter((_, index) => index > 2)
              .map((book) => (
                <Grid item xs={12} key={book.id}>
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
          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{ textAlign: 'center', fontFamily: 'Oswald' }}
            >
              Author Of The Week
            </Typography>
            <Box sx={{ height: '330px' }}>
              <Carousel>
                {popularBooks.map((book) => (
                  <Item key={book.volumeInfo.title}>
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                    <h2>{book.volumeInfo.title}</h2>
                  </Item>
                ))}
              </Carousel>
            </Box>
          </Grid>
          {/* ------------------------ Right ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              .filter((_, index) => index < 3)
              .map((book) => (
                <Grid item xs={12} key={book.id}>
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
            <Typography sx={{ fontFamily: 'Oswald', mt: '1rem' }} variant="h4">
              Discover newest releases...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SwiperCustom books={newestBooks} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

const nodeCache = new Map();
async function fetchCachedData(url) {
  // Check if the cache already has the data for this URL
  if (nodeCache.has(url)) {
    return nodeCache.get(url);
  }
  // Fetch data from the URL if it's not in the cache
  const response = await fetch(url);
  // Properly handle network errors and HTTP status errors
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const resData = await response.json();
  // Consider checking for data consistency before caching
  if (!resData || !resData.items) {
    throw new Error('Invalid data received from API');
  }
  // Cache the retrieved data
  nodeCache.set(url, resData.items); // Ensure that you are caching the correct part of the response

  return resData.items;
}

export async function loaderHomePageBooks() {
  const popularBooksUrl = `${BASE_URL}?q=inauthor:"Roald Dahl"&key=${apiKey}`;
  const newestBooksUrl = `${BASE_URL}?q=subject:fiction&orderBy=newest&key=${apiKey}`;

  const popularBooks = await fetchCachedData(popularBooksUrl);
  const newestBooks = await fetchCachedData(newestBooksUrl);

  return { newestBooks, popularBooks };
}

// export async function loaderHomePageBooks() {
//   async function fetchPopularBooks() {
//     //const response = await fetch(`${BASE_URL}?q=react+subject`);
//     const response = await fetch(
//       `${BASE_URL}?q=inauthor:"Roald Dahl"&key=${apiKey}`
//     );
//     const resData = await response.json();
//     if (!response.ok) {
//       throw json(
//         { message: 'Could not load popular books...' },
//         { status: 500 }
//       );
//     }
//     return resData.items;
//   }
//   async function fetchNewestBooks() {
//     //const response = await fetch(`${BASE_URL}?q=orderBy=newest&${apiKey}`);
//     const response = await fetch(
//       `${BASE_URL}?q=subject:fiction&orderBy=newest&key=${apiKey}`
//     );
//     const resData = await response.json();
//     if (!response.ok) {
//       throw json(
//         { message: 'Could not load recommended books...' },
//         { status: 500 }
//       );
//     }
//     return resData.items;
//   }
//   const popularBooks = await fetchPopularBooks();
//   const newestBooks = await fetchNewestBooks();
//   return { newestBooks, popularBooks };
// }
