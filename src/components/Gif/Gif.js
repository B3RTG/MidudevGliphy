import "./Gif.css";
export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <h2>{title}</h2>
      <h3>{id}</h3>
      <img alt={title} key={id} src={url} />
    </div>
  );
}
