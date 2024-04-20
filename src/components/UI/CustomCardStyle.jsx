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
    border: 8px solid #8767ba;
    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }
  .overlay {
    position: relative;
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    padding: 1rem 0.75rem;
    background: #186218;
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
    background: #f2bbd9;
    overflow-y: scroll;
  }

  .wrap:hover .overlay {
    transform: translateX(-30vmin);
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
  ${'' /* .delay-6 {
    animation-delay: 1.8s;
  }
  .delay-7 {
    animation-delay: 2.1s;
  }
  .delay-8 {
    animation-delay: 2.4s;
  } */}
`;
export default CustomCardStyle;
