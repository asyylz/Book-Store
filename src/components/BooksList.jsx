import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BookList({ searchedBooks, header }) {
  console.log(searchedBooks);

  const location = useLocation();
  return (
    <Box sx={{ mb: '2rem' }} key={location.pathname}>
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          //border: '1px solid red',
          minWidth: '95vw',
        }}
      >
        <Typography
          align="center"
          variant="h4"
          component="h1"
          margin={2}
          color="secondary.second"
          fontFamily="Oswald"
        >
          {`${header}`}
        </Typography>
        <Link
          to=".."
          relative="path"
          style={{ position: 'absolute', left: 20, top: 170 }}
        >
          <Button
            sx={{
              backgroundColor: '#F2F0EB',
              color: 'gray',
              '&:hover': { color: '#F29F05', backgroundColor: 'inherit' },
              fontSize: { xs: '8px', sm: '14px' },
              width: { xs: '80px', sm: '200px' },
              marginTop: {xs:'6rem',sm:'3rem'},
              marginRight: {xs:'2rem',sm:'3rem'},
            }}
            variant="contained"
          >
            Back to Main Page
          </Button>
        </Link>
        <Grid container spacing={5} mt={4} width="80vw">
          {searchedBooks?.map((book) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              xl={3}
              key={book.id}
              sx={{
                //border: '1px solid red',
                m: { md: 'auto', lg: 'unset', xl: 'unset' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookCard {...book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
