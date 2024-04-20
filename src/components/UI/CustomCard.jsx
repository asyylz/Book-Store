import CustomCardStyle from './CustomCardStyle';
export default function CustomCard({ volumeInfo }) {
  return (
    <CustomCardStyle coverImage={volumeInfo.imageLinks?.thumbnail}>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
            <h3 className="animate slide-left pop delay-4">
              {volumeInfo.title}
            </h3>
            <p
              className="animate slide-left pop delay-5"
              style={{ color: 'white', marginBottom: '2.5rem' }}
            >
              Author: <em>{volumeInfo.authors}</em>
            </p>
          </div>
          <div className="image-content animate slide delay-5"></div>
          <div className="dots animate">
            <div className="dot animate slide-up delay-6"></div>
            <div className="dot animate slide-up delay-7"></div>
            <div className="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div className="text">
          <p>
            {volumeInfo.description}
          </p>
        </div>
      </div>
    </CustomCardStyle>
  );
}
