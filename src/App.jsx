import { useEffect, useState } from "react";
import HomeLayout from "./components/HomeLayout";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Ramen from "./components/Ramen";
import useResize from "./hooks/useResize";
import { BounceLoader } from "react-spinners";

function App() {
  const isMobile = useResize();
  const [loading, setLoading] = useState(true);

  function changeLoading(boolean) {
    console.log(boolean);
  }
  useEffect(() => {
    console.log(loading);
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
    // setLoading(true);
  }, [loading]);

  return (
    <div>
      <div className={loading ? "show-scroller" : "display-none"}>
        <h1>Loading</h1>
        <BounceLoader
          color={"#272623"}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      <div className={loading ? "hide" : "show"}>
        <HomeLayout isMobile={isMobile} setLoading={setLoading} />
        <Location />
        <Ramen />
        <Menu isMobile={isMobile} />
      </div>
    </div>
  );
}

export default App;
