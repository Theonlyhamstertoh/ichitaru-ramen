import { useEffect, useState } from "react";
import HomeLayout from "./components/HomeLayout";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Ramen from "./components/Ramen";
import useResize from "./hooks/useResize";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const isMobile = useResize();
  const [loading, setLoading] = useState(true);

  function changeLoading(boolean) {
    console.log(boolean);
  }
  useEffect(() => {
    console.log(loading);
    // setLoading(true);
  }, [loading]);

  return (
    <div>
      <div className={loading ? "show abs-center" : "display-none"}>
        <ClimbingBoxLoader
          color={"#ffd700"}
          size={15}
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
