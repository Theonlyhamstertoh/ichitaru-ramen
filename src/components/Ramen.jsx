import { ramens } from "../ramens";

export default function Ramen() {
  return (
    <div className="ramen-section">
      <h1 className="flex-center">Ramen</h1>
      <div className="ramen-slideshow">
        {ramens.map(({ src, name, id, isNew, className }) => (
          <img key={id} className="ramen" src={src} />
        ))}
      </div>
    </div>
  );
}
