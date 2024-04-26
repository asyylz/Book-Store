import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
export default function BookList({ searchedBooks, header }) {
//console.log(searchedBooks)
  
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
            textTransform={'uppercase'}
          >
            {`${header}`}
          </Typography>
          <Link to=".." relative="path">
            <Button
              sx={{ backgroundColor: '#F2F0EB', color: 'gray' }}
              variant="contained"
            >
              Back to Main Page
            </Button>
          </Link>
          <Grid container spacing={3} columnSpacing={3} mt={3} width="80vw">
            {searchedBooks?.map((book) => (
              <Grid item xs={12} md={6} lg={5} xl={4} key={book.id}>
                <BookCard {...book}  />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
