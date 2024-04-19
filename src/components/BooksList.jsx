import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookCard from './BookCard';

export default function BookList({ searchedBooks }) {
  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Fantasy Books
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container spacing={2} mt={3}>
        {searchedBooks.map((book) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={book.id}>
            <BookCard {...book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
