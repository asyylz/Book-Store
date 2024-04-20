import CustomCardStyle from './CustomCardStyle';
export default function CustomCard({ volumeInfo }) {
  return (
    <CustomCardStyle coverImage={volumeInfo.imageLinks?.thumbnail}>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="text">
          <p>{volumeInfo.description}</p>
        </div>
      </div>
    </CustomCardStyle>
  );
}
