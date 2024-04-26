import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BookCard from './BookCardLast';
export default function BookList({ searchedBooks, header }) {
  console.log(searchedBooks);

  return (
    <Box sx={{ mb: '2rem' }}>
      <Container
        fixed
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box>
          <Typography
            align="center"
            variant="h4"
            component="h1"
            mt={'1rem'}
            color="secondary.second"
            fontFamily="Oswald"
          >
            {`${header}`}
          </Typography>
          <Link to=".." relative="path">
            <Button
              sx={{
                backgroundColor: '#F2F0EB',
                color: 'gray',
                '&:hover': { color: '#F29F05', backgroundColor: 'inherit' },
              }}
              variant="contained"
            >
              Back to Main Page
            </Button>
          </Link>
          <Grid container spacing={2} columnSpacing={2} mt={3} width="80vw">
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
        </Box>
      </Container>
    </Box>
  );
}
