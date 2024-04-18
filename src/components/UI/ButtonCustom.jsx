import './Button.css';
import ButtonStyle from './ButtonStyle.jsx';
export default function ButtonCustom({ buttonName, id, ...props }) {
  return (
    <ButtonStyle id={id} role="button">
      {buttonName}
    </ButtonStyle>
    
    // <button id={id} className="customButton" role="button">
    //   {buttonName}
    // </button>
  );
}
