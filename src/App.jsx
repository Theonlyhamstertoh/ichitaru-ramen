import { useEffect } from "react";
import { useState } from "react";
import Location from "./components/Location";
import { ramens } from "./ramens";
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

function Menu({ isMobile }) {
  return (
    <div>
      <img
        src={`assets/layouts/menu-layout${isMobile ? "-mobile" : ""}.svg`}
        className="menu-layout"
      />
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
          <img key={id} className="ramen" src={src} />
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
function HomeLayout({ isMobile }) {
  return (
    <div className={`${isMobile ? "home-section" : "home-section"}`}>
      {/* <img
        className="online-order-button v-margin-10"
        src="/assets/icons/online-order-button.svg"
      /> */}
      {/* <img className="home-background" src="assets/layouts/home-layout-desktop.svg" /> */}
    </div>
  );
}
export default App;

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  return isMobile;
}
