import "./style.css";
const Card = ({ name, age, country }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <span> Idade:{age}</span>
      <span> País:{country}</span>
    </div>
  );
};

export default Card;
