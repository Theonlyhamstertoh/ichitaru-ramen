import { useState } from "react";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <div>
      <HomeLayout />
      <Background />
      {/* <img src="assets/layouts/menu-layout.svg" /> */}
      {/* <img src="assets/layouts/background.svg" className="background-pattern" /> */}
    </div>
  );
  // return <LocationDetails />;
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
