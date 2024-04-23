import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Typography } from '@mui/material';

function SwiperCustom({ books }) {
  console.log(books[2]);
  return (
    <Box
      sx={{
        border: '2px solid red',
        width: '98vw',
        height: '40vh',
        border: '1px solid red',
        position: 'absolute',
        left:'1rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'Oswald'
      }}
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ width:'90vw', height:'35vh', padding:'0 4rem' }}
      >
    
        {books.map((book) => (
          <SwiperSlide>
            <Box sx={{height:'300px', width:'200px'}}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ height: '90%', width: '100%' }}
              />
              <Typography sx={{fontFamily:'Oswald'}}>{book.volumeInfo.title}</Typography>
            </Box>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </Box>
    
  );
}

export default SwiperCustom;
