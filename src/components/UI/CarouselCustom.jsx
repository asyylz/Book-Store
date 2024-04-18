import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box } from '@mui/material';
import './CarouselCustom.css';
function Item(props) {
  return (
    <Box
      sx={{
        height: '250px',
        width: '300px',
        backgroundColor: 'red',
        marginBottom: '10px',
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img
        style={{ height: '70%', width: '70%', padding: '10px' }}
        src={props.item.volumeInfo.imageLinks.thumbnail}
        alt={props.item.volumeInfo.title}
      />
      <Button className="CheckButton" sx={{ mt: '1rem' }}>
        Check it out!
      </Button>
    </Box>
  );
}
export default function CarouselCustom({ items, props }) {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
