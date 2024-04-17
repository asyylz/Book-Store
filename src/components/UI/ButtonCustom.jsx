import './Button.css';
export default function ButtonCustom({ buttonName, id, ...props }) {
  return (
    <button id={id} class="customButton" role="button">
      {buttonName}
    </button>
  );
}
