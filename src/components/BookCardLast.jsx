import { Badge, Box, Typography } from '@mui/material';
import { useUserProfileContext } from '../context/UserProfileContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { titleTrimmer } from '../utils/titleTrimmer.js';
export default function BookCard({ volumeInfo, id, isFav, saleInfo }) {
  const { handleFavClick } = useUserProfileContext();

  return (
    <Box
      container
      sx={{
        height: '500px',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={volumeInfo.imageLinks.thumbnail}
        alt={volumeInfo.title}
        style={{
          height: '60%',
          width: '100%',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          borderRadius: '10px',
        }}
      />
      <Typography
        sx={{
          fontFamily: 'Oswald',
          textAlign: 'center',
          mt: '1rem',
          fontSize: '20px',
        }}
      >
        {titleTrimmer(volumeInfo.title)}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Oswald',
          textAlign: 'center',
          mt: '5px',
          color: '#0B2559',
          textDecoration: 'line-through',
        }}
      >
        {saleInfo.retailPrice?.amount ? (
          `£${saleInfo.retailPrice?.amount}`
        ) : (
          <br></br>
        )}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Oswald',
          textAlign: 'center',
          mt: '5px',
          color: '#0B2559',
        }}
      >
        <Badge
          sx={{
            fontSize: '20px',
            marginRight: '5px',
          }}
        >
          £
        </Badge>
        {saleInfo.listPrice?.amount ? saleInfo.listPrice?.amount : '10.00'}
        <Badge
          sx={{
            color: '#818274',
            textDecoration: 'underline',
            marginLeft: '15px',
            cursor: 'pointer',
            '&:hover': { color: '#F29F05' },
          }}
          onClick={() => handleAddBookToCart(book)}
        >
          Add to Basket
        </Badge>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '1rem',
        }}
      >
        {isFav ? (
          <FavoriteIcon
            onClick={handleFavClick}
            className="icon"
            sx={{
              color: 'red',
              mr: '10px',
              cursor: 'pointer',
              fontSize: '2rem',
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => handleFavClick(id, volumeInfo, saleInfo)}
            className="icon"
            sx={{
              color: '#7D898C',
              mr: '10px',
              cursor: 'pointer',
              fontSize: '2rem',
            }}
          />
        )}
        <ShareIcon sx={{ mr: '10px', cursor: 'pointer' }} />
        <Typography
          sx={{
            color: '#818274',
            textDecoration: 'underline',
            marginLeft: '15px',
            cursor: 'pointer',
            '&:hover': { color: '#F29F05' },
          }}
          onClick={() => navigate(`/books/${id}`)}
        >
          See details
        </Typography>
      </Box>
    </Box>
  );
}
