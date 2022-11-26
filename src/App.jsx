import { useEffect, useState } from "react";
import HomeLayout from "./components/HomeLayout";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Ramen from "./components/Ramen";
import useResize from "./hooks/useResize";
import HashLoader from "react-spinners/HashLoader";

function App() {
    const isMobile = useResize();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div>
            {loading ? (
                <HashLoader
                    className="abs-center"
                    color={"#ffd700"}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <>
                    <HomeLayout isMobile={isMobile} />
                    <Location />
                    <Ramen />
                    <Menu isMobile={isMobile} />
                </>
            )}
        </div>
    );
}

export default App;
