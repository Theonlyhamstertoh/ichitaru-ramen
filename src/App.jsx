import { useState } from "react";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <div>
      <Background />
      <HomeLayout />
      <LocationDetails />
      <Ramen />
      <Menu />
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
    <div className="brown-background">
      <h1>Ramen</h1>
      <img className="ramen" src="/assets/ramen/soba-ramen.png" />
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
