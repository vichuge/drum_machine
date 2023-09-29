import './Card.scss';

const Card = (props) => {
  const { text } = props;
  return (
    <div className="card">
      <div className="card-body">{text}</div>
    </div>
  );
}

export default Card;
