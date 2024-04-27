import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Badge, Box, Rating, Typography } from '@mui/material';
import swiperConfig from './SwiperConfig';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function SwiperCustom({ books }) {
  //console.log(books)
  const navigate = useNavigate();
  const { addItem } = useCartContext();

  function handleAddBookToCart(book) {
    addItem(book);
  }

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
      sx={{
        width: '98vw',
        height: '40vh',
        position: 'absolute',
        left: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Oswald',
      }}
    >
      <Swiper
        {...swiperConfig}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        //slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ width: '90vw', height: '40vh', padding: '0 4rem' }}
      >
        {books.map((book, index) => (
          <SwiperSlide style={{ zIndex: '-1' }} key={index}>
            <Box sx={{ height: '300px', width: '200px' }}>
              {book.saleInfo.isEbook ? (
                <Badge sx={{ position: 'absolute' }}>
                  <img
                    alt="Static Badge"
                    src="https://img.shields.io/badge/Digital%20available-yellow?style=plastic&logo=E-Book&logoColor=yellow&labelColor=black"
                  />
                </Badge>
              ) : (
                ''
              )}
              {book.saleInfo.saleability === 'FREE' ? (
                <Badge sx={{ mb: '5px' }}>
                  <img
                    alt="Static Badge"
                    src="https://img.shields.io/badge/Free-green?style=plastic&logo=E-Book&logoColor=yellow&labelColor=black"
                  />
                </Badge>
              ) : (
                ''
              )}
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ height: '90%', width: '100%' }}
              />
              <Typography sx={{ fontFamily: 'Oswald', textAlign: 'center' }}>
                {titleTrimmer(book.volumeInfo.title)}
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
                {book.saleInfo.retailPrice?.amount ? (
                  `£${book.saleInfo.retailPrice?.amount}`
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
                {book.saleInfo.listPrice?.amount
                  ? book.saleInfo.listPrice?.amount
                  : '10.00'}
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
                sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}
              >
                <FavoriteBorderIcon sx={{ mr: '10px', cursor: 'pointer' }} />
                <ShareIcon sx={{ mr: '10px', cursor: 'pointer' }} />
                <Typography
                  sx={{
                    color: '#818274',
                    textDecoration: 'underline',
                    marginLeft: '15px',
                    cursor: 'pointer',
                    '&:hover': { color: '#F29F05' },
                  }}
                  onClick={() => navigate(`/books/${book.id}`)}
                >
                  See details
                </Typography>
              </Box>
              <Box sx={{ mt: '10px', textAlign: 'center' }}>
                <Rating
                  sx={{ textAlign: 'center' }}
                  name="read-only"
                  //value={book.volumeInfo.averageRating}
                  value={4}
                  readOnly
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
