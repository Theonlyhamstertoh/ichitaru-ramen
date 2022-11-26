export default function Menu({ isMobile }) {
  return (
    <div>
      <img
        src={`assets/layouts/menu-layout${isMobile ? "-mobile.png" : ".svg"}`}
        className="menu-layout"
      />
    </div>
  );
}
