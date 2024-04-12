import { Link } from "react-router-dom";
const Watchlist = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  return (
    <section className="p-4 mdl:p-5 mb-10">
      <div className="flex flex-wrap pr-4 mdl:pr-5 scroll-smooth">
        {Object.values(watchlist).map((show) => {
          return (
            <Link
              key={show._id}
              to={`${show.title}/${show._id}`}
              className="pl-4 pt-4   mdl:pl-5 mdl:pt-5 w-1/2 xs:w-1/3 md:w-1/4 mdl:w-1/6 featuredBoxShadow relative "
            >
              <div className="relative bg-[#FFFFFF1F] rounded-xl">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="aspect-[3/4] object-center object-cover rounded-xl cursor-pointer"
                />
                <div className="absolute inset-0 bg-white rounded-xl  opacity-0 hover:opacity-[.15] transition-opacity duration-300 "></div>
                {/* {isPremiumContent && (
                  <img
                    src={premium_icon}
                    alt=""
                    className="absolute top-1 left-1 "
                  />
                )} */}
              </div>
              <p className="text-center text-xs font-semibold px-2 pt-2">
                {show.title}
              </p>
            </Link>
          );
        })}

        {Object.values(watchlist).length === 0 && (
          <p className="pl-4 m-auto text-center text-3xl font-semibold text-rose-700">
            Watchlist is Empty
          </p>
        )}
      </div>
    </section>
  );
};

export default Watchlist;
