import styled from '@emotion/styled';

const CustomCardStyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  h1 {
    font-size: 5.25vmin;
    text-align: center;
    color: white;
  }
  p {
    font-size: max(10pt, 2.5vmin);
    line-height: 1.4;
    color: #0e390e;
    margin-bottom: 1.5rem;
  }

  .wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 35vmin;
    height: 45vmin;
    margin: 2rem auto;
    border: 8px solid #8767BA;
    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }
  .overlay {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 1rem 0.75rem;
    background: #186218;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }
  .overlay-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15vmin;
    height: 100%;
    padding: 0.5rem 0 0 0.5rem;
    border: 3px solid #F2BBD9;
    transition: 0.3s ease-in-out 0.2s;
    z-index: 1;
  }
  .image-content {
    ${'' /* position: absolute; */}
    width: 80%;
    height: 80%;
    padding: 1rem;
    background-image: ${({ coverImage }) => {
      console.log(coverImage);
      return coverImage ? `url(${coverImage})` : 'none';
    }};
    background-size: cover;
    transition: 0.3s ease-in-out;
  }
  .dots {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 55px;
    height: 4vmin;
    transition: 0.3s ease-in-out 0.3s;
  }
  .dot {
    width: 14px;
    height: 14px;
    background: yellow;
    border: 1px solid indigo;
    border-radius: 50%;
    transition: 0.3s ease-in-out 0.3s;
  }

  .text {
    position: absolute;
    top: 0;
    right: 0;
    ${'' /* width: 60vmin; */}
    height: 90%;
    padding: 3vmin 4vmin;
    background: #F2BBD9;
    overflow-y: scroll;
  }

  .wrap:hover .overlay {
    transform: translateX(-60vmin);
  }
  ${'' /* .wrap:hover .image-content {
    width: 30vmin;
  } */}
  ${'' /* .wrap:hover .overlay-content {
    border: none;
    transition-delay: 0.2s;
    transform: translateX(60vmin);
  } */}
  .wrap:hover .dots {
    transform: translateX(1rem);
  }
  .wrap:hover .dots .dot {
    background: white;
  }

  /* Animations and timing delays */
  .animate {
    animation-duration: 0.7s;
    animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
    animation-fill-mode: backwards;
  }
  /* Pop In */
  .pop {
    animation-name: pop;
  }
  @keyframes pop {
    0% {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  /* Slide In */
  .slide {
    animation-name: slide;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translate(4em, 0);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  /* Slide Left */
  .slide-left {
    animation-name: slide-left;
  }
  @keyframes slide-left {
    0% {
      opacity: 0;
      transform: translate(-40px, 0);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .slide-up {
    animation-name: slide-up;
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(3em);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .delay-1 {
    animation-delay: 0.3s;
  }
  .delay-2 {
    animation-delay: 0.6s;
  }
  .delay-3 {
    animation-delay: 0.9s;
  }
  .delay-4 {
    animation-delay: 1.2s;
  }
  .delay-5 {
    animation-delay: 1.5s;
  }
  .delay-6 {
    animation-delay: 1.8s;
  }
  .delay-7 {
    animation-delay: 2.1s;
  }
  .delay-8 {
    animation-delay: 2.4s;
  }
`;
export default CustomCardStyle;
