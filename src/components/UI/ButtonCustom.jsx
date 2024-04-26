import ButtonStyle from './ButtonStyle.jsx';
export default function ButtonCustom({ buttonName, id, to, side, ...props }) {
  if (!to) {
    return;
  }
  const linkHandler = (linkName) => {
    const path = linkName.split(' ');
    console.log(path)
    const queryLink = path[0].toLowerCase();
    return queryLink;
  };

  return (
    <ButtonStyle id={id} to={`/books?q=subject:${linkHandler(to)}`} side={side}>
      <div className="style" style={{ color: 'black' }}>
        {buttonName}
      </div>
    </ButtonStyle>
  );
}
