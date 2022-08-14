export default function NumbersCard(props) {
  const { title, description } = props;

  return (
    <div className="flex flex-col items-center">
      {+title % 1 !== 0 && <h2 className="text-5xl font-bold">${title}</h2>}
      {+title % 1 === 0 && <h2 className="text-5xl font-bold">{title}</h2>}
      <h3>{description}</h3>
    </div>
  );
}
