import { useState } from "react";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <div>
      <Background />
      {/* <img src="assets/layouts/home-layout.svg" className="home-layout" /> */}
      {/* <img src="assets/layouts/menu-layout.svg" /> */}
      {/* <img src="assets/layouts/background.svg" className="background-pattern" /> */}
    </div>
  );
  // return <LocationDetails />;
}

function Background() {
  return (
    <div>
      <div></div>
    </div>
  );
}
export default App;
