import { ramens } from "../ramens";

export default function Ramen() {
  return (
    <div className="ramen-section">
      <h1 className="flex-center">Ramen</h1>
      <div className="ramen-slideshow">
        {ramens.map(({ src, name, id, isNew, className }) => (
          <div className="flex-center ramen-item">
            <img key={id} className="ramen-photo" src={src} />
            <p className="ramen-name">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
