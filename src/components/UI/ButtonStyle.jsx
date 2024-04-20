import styled from '@emotion/styled';
const ColourSchema = [
  { name: 'pink', value: '#F2BBD9' },
  { name: 'blue', value: '#43BDD9' },
  { name: 'cinnamon', value: '#F29F05' },
  { name: 'blue', value: '#9ACDD9' },
  { name: 'purple', value: '#BE9BF3' },
  { name: 'green', value: '#AAF2A7' },
];
import { Link } from 'react-router-dom';

const ButtonStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 200;
  letter-spacing: 1px;

  .style {
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: ${({ id }) => {
      const color = ColourSchema.find((_, index) => id === index + 1);
      return color ? color.value : 'white';
    }};
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    height: 40px;
    width: 80%;
    margin-bottom: 1rem;

    &:after {
      content: '';
      background-color: black;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 15px;
      left: 15px;
      transition: 0.2s;
    }

    &:hover:after {
      top: 0px;
      left: 0px;
    }

    @media (min-width: 768px) {
      padding: 13px 50px 13px;
    }
  }
`;

export default ButtonStyle;
