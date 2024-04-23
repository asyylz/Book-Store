import ButtonStyle from './ButtonStyle.jsx';
export default function ButtonCustom({ buttonName, id, to, ...props }) {
  if (!to) {
    return;
  }
  const linkHandler = (linkName) => {
    const path = linkName.split(' ');
    const queryLink = path[0].toLowerCase();
    return queryLink;
  };

  return (
    <ButtonStyle id={id} to={`books?category=${linkHandler(to)}`}>
      <div className="style" style={{ color: 'black' }}>
        {buttonName}
      </div>
    </ButtonStyle>
  );
}
