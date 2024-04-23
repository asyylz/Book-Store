/* ------------------ react-router-dom-imports ------------------ */
import { json, useLoaderData } from 'react-router-dom';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import Footer from '../components/UI/Footer';

/* ----------------- material ui imports ---------------- */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                    />
                  </Item>
                </Grid>
              ))}
          </Grid>
          {/* ------------------------ Middle ------------------------*/}
          <Grid item xs={4}>
            <Box sx={{ height: '300px' }}>
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
            <Typography sx={{ fontFamily: 'Oswald',mt:'1rem' }} variant="h4">
              Discover Your Next Book...
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

export async function loaderHomePageBooks() {
  async function fetchPopularBooks() {
    const response = await fetch(`${BASE_URL}?q=react+subject`);
    const resData = await response.json();
    if (!response.ok) {
      throw json(
        { message: 'Could not load popular books...' },
        { status: 500 }
      );
    }
    return resData.items;
  }

  async function fetchNewestBooks() {
    const response = await fetch(`${BASE_URL}?q=orderBy=newest&${apiKey}`);
    const resData = await response.json();
    if (!response.ok) {
      throw json(
        { message: 'Could not load recommended books...' },
        { status: 500 }
      );
    }
    return resData.items;
  }

  const popularBooks = await fetchPopularBooks();
  const newestBooks = await fetchNewestBooks();

  return { newestBooks, popularBooks };
}
