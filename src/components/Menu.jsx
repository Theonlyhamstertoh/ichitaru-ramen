export default function Menu({ isMobile }) {
  return (
    <div>
      <img
        src={`assets/layouts/menu-layout${isMobile ? "-mobile" : ""}.svg`}
        className="menu-layout"
      />
    </div>
  );
}
