/* ------------------ react-router-dom-imports ------------------ */
import { json, useLoaderData } from 'react-router-dom';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

//import Carousel from '@mui/material/Carousel';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/* ----------------- material ui imports ---------------- */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonCustom from '../components/UI/ButtonCustom';
//import CarouselCustom from '../components/UI/CarouselCustom';

/* -------------------- react imports ------------------- */
import { useEffect } from 'react';

/* --------------------- url imporst -------------------- */
const BASE_URL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_APP_apiKeyGoogle;

/* ------------------- section book imports ------------------ */
const bookSection = [
  { id: 1, name: 'Children books' },
  { id: 2, name: 'Thriller books' },
  { id: 3, name: 'Psychology books' },
  { id: 4, name: 'Fantasy books' },
  { id: 5, name: 'Self help books' },
  { id: 6, name: 'Fiction books' },
];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid red',
  boxShadow: 'none',
  padding: '10px',
  textAlign: 'center',
}));

export default function HomePage() {
  const { newestBooks, popularBooks } = useLoaderData();

  return (
    <>
      {/* --------------------- Top Section -------------------- */}
      <Box sx={{ flexGrow: 1, mt: '1rem', ml: '4rem', mr: '4rem' }}>
        <Grid container spacing={2}>
          {/* ------------------------ Left ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              .filter((_, index) => index > 2)
              .map((book) => (
                <Grid item xs={12} key={book.id}>
                  <Item>
                    <ButtonCustom buttonName={book.name} id={book.id} />
                  </Item>
                </Grid>
              ))}
          </Grid>
          {/* ------------------------ Middle ------------------------*/}
          <Grid item xs={4}>
            <Item>
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
            </Item>
          </Grid>
          {/* ------------------------ Right ------------------------*/}
          <Grid item xs={4}>
            {bookSection
              .filter((_, index) => index < 3)
              .map((book) => (
                <Grid item xs={12} key={book.id}>
                  <Item>
                    <ButtonCustom buttonName={book.name} id={book.id} />
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
            <h1>Discover Your Next Book...</h1>
          </Grid>
          <Grid item xs={12}>
            {/* <Carousel>
              {newestBooks.map((book) => (
                <Item key={book.volumeInfo.title}>
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.description}</p>
                </Item>
              ))}
            </Carousel> */}
            <Box sx={{ maxWidth: 600, margin: 'auto' }}>
              <Carousel
                animation="slide"
                enableAutoPlay={false}
                prevButton={
                  <IconButton>
                    <NavigateBeforeIcon />
                  </IconButton>
                }
                nextButton={
                  <IconButton>
                    <NavigateNextIcon />
                  </IconButton>
                }
                sx={{
                  maxWidth: 600,
                  margin: 'auto',
                  '.MuiPaper-root': {
                    width: 'calc(100% / 3)', 
                    padding: '8px',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    textAlign: 'center',
                    verticalAlign: 'top',
                  },
                }}
              >
                {newestBooks.map((book, index) => (
                  <Paper key={index}>
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={`Image ${index + 1}`}
                      style={{ width: '100%' }}
                    />
                    <h2>{book.volumeInfo.title}</h2>
                  </Paper>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export async function loaderHomePageBooks() {
  async function fetchPopularBooks() {
    const response = await fetch(`${BASE_URL}q=react+subject`);
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
    const response = await fetch(`${BASE_URL}q=orderBy=newest&${apiKey}`);
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
