import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomCardStyle from './CustomCardStyle';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const shadow = {
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    width:100,
};

export default function CustomCard({ volumeInfo }) {
  return (
    <Box sx={{ border: '1px solid gray', borderRadius: '10px' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mt: '10px',
          fontFamily: 'Oswald',
          fontWeight: '200',
        }}
      >
        {volumeInfo.authors}
      </Typography>
      <CustomCardStyle coverImage={volumeInfo.imageLinks?.thumbnail}>
        <Box className="wrap">
          <Box className="overlay">
            <Box className="image-content"></Box>
          </Box>
          <Box className="text">
            <p style={{ fontSize: '30px', fontWeight: '200' }}>
              {volumeInfo.description}
            </p>
          </Box>
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
        </Box>
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
          <Typography>Title: {volumeInfo.title}</Typography>
          <Typography>Publisher: {volumeInfo.publisher}</Typography>
          <Typography>Published Date: {volumeInfo.publishedDate}</Typography>
          <Typography>Page Count: {volumeInfo.pageCount}</Typography>
        </Box>
        <Box>
          <Link>
            <Button sx={shadow}>More Details</Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
}
