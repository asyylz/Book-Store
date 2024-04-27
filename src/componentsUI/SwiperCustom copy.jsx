import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';
import swiperConfig from './SwiperConfig';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';

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
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
