import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CustomCardStyle from './CustomCardStyle';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const shadow = {
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
  width: 100,
  marginTop: 1,
  color: 'gray',
};

export default function CustomCard({ volumeInfo, id }) {
 
  return (
    <Box
      sx={{
        border: '1px solid gray',
        borderRadius: '10px',
        height: '60vmin',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
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
              color: '#7D898C',
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
        <Box sx={{ mr: '20px' }}>
          <Typography sx={{}}>Title: {volumeInfo.title}</Typography>
          <Typography>Publisher: {volumeInfo.publisher}</Typography>
          <Typography>Published Date: {volumeInfo.publishedDate}</Typography>
          <Typography>Page Count: {volumeInfo.pageCount}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mr: '20px' }}>
          <Link to={`/books?category=/${id}`}>
            <Button sx={shadow}>More Details</Button>
          </Link>
          <Button sx={shadow}>Add Favs</Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}
