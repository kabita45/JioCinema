import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const AddToWatchlist = ({ id, showData }) => {
  const [isShowAdded, setShowAdded] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || {};
    if (id in watchlist) setShowAdded(true);
  }, []);

  const handleAddToWatchlistClick = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || {};
    if (id in watchlist) delete watchlist[id];
    else watchlist[id] = showData;

    console.log("id is", id);
    setShowAdded((prev) => !prev);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  return (
    <button
      onClick={handleAddToWatchlistClick}
      title={isShowAdded ? "Remove From Watchlist" : "Add To Watchlist"}
      className="h-10 w-10 text-white flex items-center justify-centers bg-[#2e2e2e] hover:bg-[#444] rounded-lg px-3 py-2 cursor-pointer"
    >
      {isShowAdded ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <i className="fa-solid fa-plus text-base"></i>
      )}
    </button>
  );
};

export default AddToWatchlist;
