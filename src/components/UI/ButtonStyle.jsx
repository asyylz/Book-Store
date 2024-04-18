import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: #f2cda0;
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
