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
const bookSectionLeft = ['Children books', 'Thriller books', 'Pshsycolg'];
const bookSectionRight = ['Children books', 'Thriller books', 'Pshsycolg'];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid red',
  boxShadow: 'none',
  padding: '10px',
  textAlign: 'center',
}));

var items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
];

export default function HomePage() {
  const popularBooks = useLoaderData();

  // useEffect(() => {
  //   fetchPopularBooks();
  // }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: '1rem', ml: '4rem', mr: '4rem' }}>
      <Grid container spacing={2}>
        {/* ------------------------ Left ------------------------*/}
        <Grid item xs={3}>
          {bookSectionLeft.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Item>
                <ButtonCustom buttonName={section} />
              </Item>
            </Grid>
          ))}
        </Grid>
        {/* ------------------------ Middle ------------------------*/}
        <Grid item xs={6}>
          <Item>
            <CarouselCustom items={popularBooks} />
          </Item>
        </Grid>
        {/* ------------------------ Right ------------------------*/}
        <Grid item xs={3}>
          {bookSectionRight.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Item>
                <ButtonCustom buttonName={section} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export async function loaderPopularBooks() {
  const response = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=popular'
  );
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not lood popular books...' }, { status: 500 });
  }
  const popularBooks = resData.items;
  return popularBooks;
}
