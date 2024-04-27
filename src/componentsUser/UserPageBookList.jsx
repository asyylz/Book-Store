import BookCard from '../components/BookCard';
import { Box, Grid } from '@mui/material';


export default function UserPageBookList({books}) {
  return (
    <Box sx={{ mb: '2rem' }}>
      <Grid container spacing={3} columnSpacing={3} m={3} width="80vw">
        {books.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            xl={3}
            key={book.id}
            sx={{
              m: { md: 'auto', lg: 'unset', xl: 'unset' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BookCard {...book} isFav />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

