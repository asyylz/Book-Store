import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Typography } from '@mui/material';
import swiperConfig from './SwiperConfig';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SwiperCustom({ books }) {
  console.log(books);
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ width: '90vw', height: '40vh', padding: '0 4rem' }}
      >
        {books.map((book) => (
          <SwiperSlide style={{ zIndex: '-1' }}>
            <Box sx={{ height: '300px', width: '200px' }}>
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
                {/* <small>{book.saleInfo.listPrice?.currencyCode}</small> */}
                <small
                  style={{
                    fontSize: '20px',
                    marginRight: '5px',
                  }}
                >
                  £
                </small>
                {book.saleInfo.listPrice?.amount
                  ? book.saleInfo.listPrice?.amount
                  : '10.00'}
                <small
                  style={{
                    color: '#818274',
                    textDecoration: 'underline',
                    marginLeft: '15px',
                  }}
                >
                  Add to Basket
                </small>
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}
              >
                <FavoriteBorderIcon sx={{ mr: '10px' }} />
                <ShareIcon sx={{ mr: '10px' }} />
                <Typography
                  sx={{
                    color: '#818274',
                    textDecoration: 'underline',
                    marginLeft: '15px',
                  }}
                >
                  See details
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
