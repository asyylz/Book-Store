import { useState } from 'react';
import ButtonStyle from './ButtonStyle.jsx';
export default function ButtonCustom({ buttonName, id, to, side, ...props }) {
  const [isEbook, setIsEbook] = useState(false);
  if (!to) {
    return;
  }

  const linkHandler = (linkName) => {
    const path = linkName.split(' ');
    if (linkName.includes('E-Books')) {
      setIsEbook(true);
    }
    const queryLink = path[0].toLowerCase();
    return queryLink;
  };

  return (
    <ButtonStyle
      id={id}
      to={
        isEbook
          ? '/books?q=a&filter:ebooks'
          : `/books?q=subject:${linkHandler(to)}`
      }
      side={side}
    >
      <div className="style" style={{ color: 'black' }}>
        {buttonName}
      </div>
    </ButtonStyle>
  );
}
