import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';
import swiperConfig from './SwiperConfig';
import BookCard from '../components/BookCard';
import { useUserProfileContext } from '../context/UserProfileContext';

function SwiperCustom({ books }) {
  const { favBooksUpdated } = useUserProfileContext();
  console.log(favBooksUpdated);
  const favBookIds = favBooksUpdated?.map((book) => book.id);

  return (
    <Box
      sx={{
        width: '98vw',
        //minHeight: '70vh',
        //position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Oswald',
        //border: '2px solid green',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        borderRadius: '10px',
      }}
    >
      <Swiper
        {...swiperConfig}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween="100px"
        //slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          marginTop: '20px',
          width: '90vw',
          minHeight: '40vh',
          padding: '0 5rem',
          zIndex: 1301,
        }}
      >
        {books.map((book, index) => (
          <SwiperSlide style={{ zIndex: '-1' }} key={index}>
            <BookCard
              {...book}
              isFav={favBookIds.some((id) => book.id === id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
