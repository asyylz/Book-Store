import { Badge, Box, Grid, Rating, Typography } from '@mui/material';
import { useUserProfileContext } from '../context/UserProfileContext.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { titleTrimmer } from '../utils/titleTrimmer.js';
import { useCartContext } from '../context/CartContext.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
export default function BookCard({ volumeInfo, id, isFav, saleInfo }) {
  const { addItem } = useCartContext();
  const { handleFavClick } = useUserProfileContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  function handleAddBookToCart(book) {
    addItem(book);
  }

  return (
    <Box
      sx={{
        minHeight: { xs: '400px' },
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //border: '1px solid red',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', position: 'relative' }}>
        {saleInfo.isEbook ? (
          <Badge sx={{ position: 'absolute', right: -30 }}>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/Digital%20available-yellow?style=plastic&logo=E-Book&logoColor=yellow&labelColor=navy"
            />
          </Badge>
        ) : (
          ''
        )}
        {saleInfo.saleability === 'FREE' ? (
          <Badge sx={{ position: 'absolute', right: -80 }}>
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/Free-green?style=plastic&logo=E-Book&logoColor=yellow&labelColor=navy"
            />
          </Badge>
        ) : (
          ''
        )}
      </Box>
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        style={{
          height: '210px',
          width: '150px',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          borderRadius: '10px',
        }}
      />
      <Typography
        sx={{
          fontFamily: 'Oswald',
          textAlign: 'center',
          mt: '0.5rem',
          fontSize: '20px',
        }}
      >
        {titleTrimmer(volumeInfo.title, 4)}
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
        {saleInfo.listPrice?.amount ?? '10.00'}
        <Badge
          sx={{
            color: '#818274',
            textDecoration: 'underline',
            marginLeft: '15px',
            cursor: 'pointer',
            '&:hover': { color: '#F29F05' },
          }}
          onClick={() =>
            handleAddBookToCart({ volumeInfo, id, isFav, saleInfo })
          }
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
            className="icon"
            sx={{
              color: 'red',
              mr: '10px',
              cursor: 'pointer',
              fontSize: '2rem',
            }}
            onClick={() =>
              handleFavClick(id, volumeInfo, saleInfo, currentUser.uid)
            }
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() =>
              handleFavClick(id, volumeInfo, saleInfo, currentUser.uid)
            }
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
      <Grid
        sx={{
          mt: '5px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // border: '1px solid red',
          minHeight: '40px',
        }}
      >
        <Typography sx={{ fontFamily: 'Oswald', mb: '5px', fontSize: '18px' }}>
          Author:{volumeInfo?.authors}
        </Typography>
        <Typography sx={{ fontFamily: 'Oswald', mb: '5px', fontSize: '18px' }}>
          Category: {volumeInfo?.categories}
        </Typography>
        <div>
          {' '}
          <Rating
            sx={{ textAlign: 'center' }}
            name="read-only"
            value={volumeInfo.averageRating ?? 4}
            readOnly
          />
        </div>
      </Grid>
    </Box>
  );
}
