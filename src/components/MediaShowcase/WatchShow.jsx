import { useLocation } from "react-router-dom";

const WatchShow = () => {
  const location = useLocation();
  return (
    <section name="watch-show">
      <video
        className="max-h-[600px] mx-auto my-4"
        controls
        poster
        autoPlay
        src={location.state.showLink}
      ></video>
    </section>
  );
};

export default WatchShow;
