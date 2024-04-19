import './Button.css';
import ButtonStyle from './ButtonStyle.jsx';
export default function ButtonCustom({ buttonName, id, to, ...props }) {
  const linkHandler = (linkName) => {
    const path = linkName.split(' ');
    const queryLink = path[0].toLowerCase();
    return queryLink;
  };

  return (
    <ButtonStyle id={id} to={`books?category=${linkHandler(to)}`}>
      <div className="style">{buttonName}</div>
    </ButtonStyle>
  );
}
