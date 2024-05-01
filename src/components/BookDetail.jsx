import { Box, Grid, Typography, Rating } from '@mui/material';
export default function BookDetail({ book }) {
  return (
    <Box sx={{ border: '1px solid red', minHeight: '60vh' }}>
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', mb: '20px', fontFamily: 'Oswald' }}
      >
        {book.volumeInfo.title}
      </Typography>
      <Grid container sx={{ marginLeft: 1 }} xs={12}>
        <Grid item xs={5} sx={{ textAlign: 'center' }}>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            style={{
              borderRadius: '10px',
            }}
          />
          <Box
            sx={{ fontFamily: 'Oswald', textAlign: 'start', padding: '5px' }}
          >
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Author:</strong>
              {book.volumeInfo.authors[0]}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Category:</strong>
              {book.volumeInfo.categories}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Publisher:</strong>
              {book.volumeInfo.publisher}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Page:</strong>
              {book.volumeInfo.pageCount}
            </Typography>
            <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
              <strong style={{ fontSize: '18px' }}>Published date:</strong>
              {book.volumeInfo.publishedDate}
            </Typography>

            {!book.saleInfo.isEbook ? (
              <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
                {' '}
                <strong style={{ fontSize: '18px' }}>Digital:</strong>
                Available
              </Typography>
            ) : null}
            <Rating
              sx={{ textAlign: 'center' }}
              name="read-only"
              value={book.volumeInfo.averageRating ?? 4}
              readOnly
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            //border: '1px solid green',
            padding: '10px',
            fontFamily: 'Oswald',
          }}
        >
          {book.volumeInfo.description}
        </Grid>
      </Grid>
    </Box>
  );
}
