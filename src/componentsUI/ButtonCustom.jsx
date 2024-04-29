import { useState } from 'react';
import ButtonStyle from './ButtonStyle.jsx';
import { Box } from '@mui/material';
export default function ButtonCustom({ buttonName, id, to, side, ...props }) {
  const [isEbook, setIsEbook] = useState({ ebook: false, free: false });
  if (!to) {
    return;
  }

  const linkHandler = (linkName) => {
    const path = linkName.split(' ');
    if (linkName.includes('E-Books')) {
      setIsEbook((prevState) => ({ ...prevState, ebook: true }));
    }
    if (linkName.includes('Free')) {
      setIsEbook((prevState) => ({ ...prevState, free: true }));
    }
    const queryLink = path[0].toLowerCase();
    return queryLink;
  };

  return (
    <ButtonStyle
      id={id}
      to={
        isEbook.ebook
          ? `/books?q=a&filter=${isEbook.free ? 'free-' : ''}ebooks`
          : `/books?q=subject:${linkHandler(to)}`
      }
      side={side}
    >
      <Box
        className="style"
        sx={{
          color: 'black',
          fontSize: { xs: '16px', sm: '20px', md: '1.4rem' },
          width: { xs: '130px', sm: '200px', md: '200px', xl: '300px' },
        }}
      >
        {buttonName}
      </Box>
    </ButtonStyle>
  );
}
