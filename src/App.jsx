import { useState } from "react";
import Location from "./components/Location";
import { ramens } from "./ramens";
function App() {
  return (
    <div>
      <HomeLayout />

      <Location />
      <Ramen />
      {/* <Menu /> */}
      {/* <img src="assets/layouts/background.svg" className="background-pattern" /> */}
    </div>
  );
  // return <LocationDetails />;
}

function Menu() {
  return (
    <div>
      <img src="assets/layouts/menu-layout.svg" className="menu-layout" />
    </div>
  );
}

{
  /* <img src="assets/layouts/footer-layout.png" />; */
}
function Ramen() {
  return (
    <div className="ramen-section">
      <h1 className="flex-center">Ramen</h1>
      <div className="ramen-slideshow">
        {ramens.map(({ src, name, id, isNew, className }) => (
          <img key={id} className={`ramen ${className ?? ""}`} src={src} />
        ))}
      </div>
    </div>
  );
}
function Background() {
  return (
    <div>
      <div className=""></div>
    </div>
  );
}
function HomeLayout() {
  return (
    <div className="brown-background">
      <img src="assets/layouts/home-layout-mountains.png" className="home-layout-mountain" />
      <div className="flex-center ">
        <img className="ichitaru-logo" src="/assets/icons/ichitaru-logo.jpg" />
        <img
          className="online-order-button v-margin-10"
          src="/assets/icons/online-order-button.svg"
        />
      </div>
    </div>
  );
}
export default App;
