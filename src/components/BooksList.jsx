import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookCard from './BookCard';

export default function BookList({ searchedBooks, header }) {
  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        mt={'1rem'}
        color="secondary.second"
        textTransform={'uppercase'}
      >
        {`${header} Books`}
      </Typography>
      <Button component="a" variant="contained" href='/'>Back to main page</Button>
      <Grid container spacing={3} columnSpacing={3} mt={3} width="80vw">
        {searchedBooks.map((book) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={book.id}>
            <BookCard {...book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
