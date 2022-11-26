import { useEffect } from "react";
import { useState } from "react";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Ramen from "./components/Ramen";
import useResize from "./hooks/useResize";
function App() {
  const isMobile = useResize();
  return (
    <div>
      <HomeLayout isMobile={isMobile} />

      <Location />
      <Ramen />
      <Menu isMobile={isMobile} />
      {/* <img src="assets/layouts/background.svg" className="background-pattern" /> */}
    </div>
  );
  // return <LocationDetails />;
}

function HomeLayout({ isMobile }) {
  return (
    <div className="home-section">
      <a target="_blank" href="https://fromtherestaurant.com/ichitaru-ramen/locations/">
        <img className="order-button" src="assets/icons/online-order-button.svg" />
      </a>
    </div>
  );
}
export default App;
