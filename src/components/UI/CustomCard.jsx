import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomCardStyle from './CustomCardStyle';
import { Box, Typography, Grid } from '@mui/material';
export default function CustomCard({ volumeInfo }) {
  return (
    <Box sx={{ border: '1px solid gray', borderRadius: '10px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: '10px' }}>
        {volumeInfo.authors}
      </Typography>
      <CustomCardStyle coverImage={volumeInfo.imageLinks?.thumbnail}>
        <div className="wrap">
          <div className="overlay">
            <div className="image-content"></div>
          </div>
          <div className="text">
            <p>{volumeInfo.description}</p>
          </div>
          <FavoriteBorderIcon
            className="icon"
            sx={{
              zIndex: '1',
              position: 'absolute',
              right: '10px',
              top: '10px',
              fontSize: '2.7rem',
              color: '#F2B6C1',
            }}
          />
        </div>
      </CustomCardStyle>
      <Grid
        columnSpacing={4}
        sx={{
          ml: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          mr: '10px',
        }}
      >
        <Box>
          <p>Title: {volumeInfo.title}</p>
          <p>Publisher: {volumeInfo.publisher}</p>
        </Box>
        <Box>
          <p>Published Date: {volumeInfo.publishedDate}</p>
          <p>Page Count: {volumeInfo.pageCount}</p>
        </Box>
      </Grid>
    </Box>
  );
}
