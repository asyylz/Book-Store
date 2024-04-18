import styled from '@emotion/styled';
const ColourSchema = [
  { name: 'pink', value: '#F2BBD9' },
  { name: 'blue', value: '#43BDD9' },
  { name: 'cinnamon', value: '#F29F05' },
  { name: 'blue', value: '#9ACDD9' },
  { name: 'purple', value: '#BE9BF3' },
  { name: 'green', value: '#AAF2A7' },

];

const ButtonStyle = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
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
  height: 60px;
  width: 100%;

  &:after {
    content: '';
    background-color: black;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;

export default ButtonStyle;
