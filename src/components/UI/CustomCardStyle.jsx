import styled from '@emotion/styled';

const CustomCardStyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  h3 {
    text-align: center;
    color: white;
  }
  p {
    font-size: max(10pt, 2.5vmin);
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 30vmin;
    height: 40vmin;
    margin: 10px auto;
    border: 1px solid gray;
    transition: 0.3s ease-in-out;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .overlay {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    padding: 1rem 0.75rem;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }

  .image-content {
    position: absolute;
    width: 80%;
    height: 80%;
    background-image: ${({ coverImage }) => {
      console.log(coverImage);
      return coverImage ? `url(${coverImage})` : 'none';
    }};
    background-size: cover;
    transition: 0.3s ease-in-out;
  }

  .text {
    position: absolute;
    top: 0;
    left: 20px;
    height: 90%;
    padding: 3vmin 4vmin;
    background: #A3D9C;
    overflow-y: scroll;
  }
  .icon {
    transition: 0.3s ease-in-out;
  }

  .wrap:hover .overlay {
    transform: translateX(-30vmin);
  }
  .wrap:hover .icon {
    transform: translateX(-30vmin);
  }
`;
export default CustomCardStyle;
