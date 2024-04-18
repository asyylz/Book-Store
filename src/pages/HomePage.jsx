/* ------------------ react-router-dom-imports ------------------ */
import { json, useLoaderData } from 'react-router-dom';
import * as React from 'react';

/* ----------------- material ui imports ---------------- */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonCustom from '../components/UI/ButtonCustom';
import CarouselCustom from '../components/UI/CarouselCustom';

/* -------------------- react imports ------------------- */
import { useEffect } from 'react';

/* ------------------- section imports ------------------ */
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
  const { recommendedBooks, popularBooks } = useLoaderData();

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
              <CarouselCustom items={popularBooks} />
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
      <Box></Box>
    </>
  );
}

export async function loaderHomePageBooks() {
  async function fetchPopularBooks() {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=react+subject'
    );
    const resData = await response.json();
    if (!response.ok) {
      throw json(
        { message: 'Could not load popular books...' },
        { status: 500 }
      );
    }
    return resData.items;
  }

  async function fetchRecommendedBooks() {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=react+subject'
    );
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
  const recommendedBooks = await fetchRecommendedBooks();

  return { recommendedBooks, popularBooks };
}
