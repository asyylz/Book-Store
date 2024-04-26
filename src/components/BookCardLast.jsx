import { Badge, Box, Typography } from '@mui/material';
import { useUserProfileContext } from '../context/UserProfileContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { update, getDatabase, ref, get, set } from 'firebase/database';
export default function BookCard({ volumeInfo, id, isFav, saleInfo }) {
  const { userData, user, handleFavClick } = useUserProfileContext();

  //   async function handleFavClick() {
  //     const db = getDatabase();
  //     const userRef = ref(db, `users/${user.uid}`);

  //     try {
  //       const snapshot = await get(userRef);
  //       if (snapshot.exists()) {
  //         const userData = snapshot.val() || {};
  //         let favBooks = userData.favBooks || [];
  //         const isAlreadyFavorite = favBooks.some((book) => book.id === id);
  //         console.log(isAlreadyFavorite);

  //         if (isAlreadyFavorite) {
  //           alert('This book has already in your favorites...');
  //           return;
  //         } else {
  //           favBooks.push({ volumeInfo, id, saleInfo });
  //         }
  //         await update(userRef, { favBooks });
  //         console.log('Favorite books updated successfully.');
  //       } else {
  //         console.log('No user data available.');
  //       }
  //     } catch (error) {
  //       console.error('Error updating favorite books:', error);
  //     }
  //   }

  const titleTrimmer = (title) => {
    const countWords = title.split(' ');
    if (countWords.length > 4) {
      const newTitleWords = countWords.filter((_, index) => index < 4);
      return newTitleWords.join(' ');
    } else {
      return title;
    }
  };

  return (
    <Box
      container
      sx={{
        height: '500px',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
      }}
    >
      <img
        src={volumeInfo.imageLinks.thumbnail}
        alt={volumeInfo.title}
        style={{ height: '60%', width: '100%' }}
      />
      <Typography sx={{ fontFamily: 'Oswald', textAlign: 'center' }}>
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
