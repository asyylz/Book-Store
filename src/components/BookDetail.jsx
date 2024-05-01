import { Box, Grid, Typography, Rating } from '@mui/material';
const bookInfoProperties = [
  { label: 'Author: ', path: 'authors' },
  { label: 'Publisher: ', path: 'publisher' },
  { label: 'Categories: ', path: 'categories' },
  { label: 'Published date: ', path: 'publishedDate' },
  { label: 'Page: ', path: 'pageCount' },
];

function getNestedProperty(obj, path) {
  return path.split('.').reduce((acc, part) => {
    return acc && acc[part];
  }, obj);
}

export default function BookDetail({ book }) {
  return (
    <Box sx={{ minHeight: '60vh' }}>
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
            {bookInfoProperties.map(({ label, path }) => (
              <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }} key={path}>
                <strong style={{ fontSize: '18px' }}>{label}</strong>
                {getNestedProperty(book.volumeInfo, path)}
              </Typography>
            ))}

            {!book.saleInfo.isEbook ? (
              <Typography sx={{ fontFamily: 'Oswald', mb: '5px' }}>
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
            padding: '20px',
            fontFamily: 'Oswald',
          }}
        >
          {book.volumeInfo.description}
        </Grid>
      </Grid>
    </Box>
  );
}
