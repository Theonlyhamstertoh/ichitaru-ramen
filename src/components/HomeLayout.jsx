export default function HomeLayout({ setLoading }) {
  return (
    <div
      className="home-section"
      onLoad={(e) => {
        console.log("loaded");
        setLoading(false);
      }}
    >
      <a target="_blank" href="https://fromtherestaurant.com/ichitaru-ramen/locations/"></a>
    </div>
  );
}
