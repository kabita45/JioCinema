import useGetShows from "../../hooks/useGetShows";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import showCategories from "../../constants/showCategories";
import { premium_carousel_icon } from "../../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowsSlider from "../ListOfShows/ShowsSlider";
import AddToWatchlist from "../Watchlist/AddToWatchlist";
const MediaShowcase = () => {
  const userDetails = useSelector((state) => state.signinDetails.userDetails);
  const params = useParams();

  const isPremiumUser = useSelector((state) => state.isPremiumUser);
  const { isLoading, error, showsData } = useGetShows({ id: params?.id });

  const isPremiumContent = (type) => {
    return showCategories.some(
      (category) => category.type.toLowerCase() === type && category.premium
    );
  };

  if (isLoading) {
    return (
      <Oval
        height={50}
        width={50}
        color="#d9008d"
        wrapperStyle={{
          justifyContent: "center",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="##d9008d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }
  if (!showsData?._id) return <p>data not available</p>;

  if (error?.data?.message) {
    return (
      <p className="text-lg text-rose-700 mx-auto">{error?.data?.message}</p>
    );
  }

  return (
    <section name="media-showcase" className="min-h-[100vh]">
      <div
        name="show"
        key={showsData.id}
        className=" max-w-[1200px] mx-auto flex flex-col items-center p-5 my-6 font-medium gap-8 sm:flex-row"
      >
        <section className="w-full  max-w-[350px] h-[500px]">
          <img
            src={showsData.thumbnail}
            alt={showsData.title}
            className="rounded-xl shadow-2xl min-w-[100%] min-h-[100%] object-cover object-center"
          />
        </section>

        <section className="h-full w-full flex flex-col justify-center gap-6 text-white ">
          {/* -----title---- */}
          <h2 className="text-2xl sm:text-4xl ">{showsData.title}</h2>

          {/* ----genre----- */}
          <ul className="flex gap-1 flex-wrap ">
            {showsData.keywords.map((item) => (
              <li key={item} className="text-xs bg-[#d9008d] rounded px-3 ">{`${
                item[0].toUpperCase() + item.slice(1)
              }`}</li>
            ))}
          </ul>

          {/* ----watch----- */}
          <div className="flex items-center  gap-4">
            <Link
              to={
                isPremiumUser
                  ? "watch"
                  : isPremiumContent(showsData.type)
                  ? "/subscription"
                  : "watch"
              }
              state={{ showLink: showsData.video_url }}
            >
              <button className="customButton flex items-center  max-w-max">
                <i className="fa-solid fa-play pr-2 text-base"></i>
                <p>WATCH</p>
              </button>
            </Link>

            {userDetails?.name && (
              <AddToWatchlist id={params?.id} showData={showsData} />
            )}

            {isPremiumContent(showsData.type) && (
              <img
                src={premium_carousel_icon}
                alt="premium-content"
                className="w-32"
              />
            )}
          </div>

          {/* ----description----- */}
          <div>
            <p className="text-2xl font-semibold">Overview</p>
            <p>{showsData.description}</p>
          </div>

          <hr style={{ borderTopColor: "#FFFFFF3F" }} />
          {/* ----release----- */}
          <div className="flex gap-4 flex-wrap">
            <div>
              <span>Release Date : </span>
              <span className="text-defaultTextColor">Aug 24 2023</span>
            </div>
            <div>
              <span>RunTime : </span>
              <span className="text-defaultTextColor">2h 8m</span>
            </div>
          </div>

          <hr style={{ borderTopColor: "#FFFFFF3F" }} />

          {/* ----cast----- */}
          <ul name="cast" className="flex flex-wrap items-center">
            <li className="pr-1">Cast : </li>
            {showsData.cast.map((item) => (
              <li key={item} className=" text-defaultTextColor pr-3">{`${
                item[0].toUpperCase() + item.slice(1)
              }`}</li>
            ))}
          </ul>

          <hr style={{ borderTopColor: "#FFFFFF3F" }} />

          {/* ----director----- */}
          <div>
            <span>Director : </span>
            <span className=" text-defaultTextColor">{showsData.director}</span>
          </div>

          <hr style={{ borderTopColor: "#FFFFFF3F" }} />
        </section>
      </div>

      <div className="my-16">
        <div className="flex justify-between px-4 pb-1 items-center">
          <h3 className="text-white font-semibold text-2xl ">More Like This</h3>
          <Link to={`/${showsData.type.toLocaleLowerCase()}`}>
            <i className="fa-solid fa-angles-right hover:scale-125 transition-transform  text-xl cursor-pointer"></i>
          </Link>
        </div>
        <ShowsSlider
          type={showsData.type.toLowerCase()}
          isPremiumContent={isPremiumContent(showsData.type)}
        />
      </div>
    </section>
  );
};

export default MediaShowcase;
