import { useEffect } from "react";
import { useState } from "react";
import useResize from "../hooks/useResize";

const useProgressiveImage = (src, setLoading) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
    setLoading(false);
  }, [src]);

  return sourceLoaded;
};

export default function HomeLayout({ setLoading }) {
  const isMobile = useResize();

  const loaded = useProgressiveImage("assets/layouts/home-layout-desktop2.png", setLoading);
  return (
    <div className="home-section" style={{ backgroundImage: `url(${loaded || ""})` }}>
      <a target="_blank" href="https://fromtherestaurant.com/ichitaru-ramen/locations/"></a>
    </div>
  );
}
