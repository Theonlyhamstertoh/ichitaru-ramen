import HomeLayout from "./components/HomeLayout";
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
    </div>
  );
}

export default App;
