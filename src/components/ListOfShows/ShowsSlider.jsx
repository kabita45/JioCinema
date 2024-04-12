/* eslint-disable react/prop-types */
// import showsData from "../../constants/showsData";
import { useCallback, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";
import useGetShows from "../../hooks/useGetShows";
import { Link } from "react-router-dom";
import { premium_icon } from "../../assets/images";
const ShowsSlider = ({ limit = 20, type = "", isPremiumContent = false }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);

  const { isLoading, showsData, error, hasNextPage } = useGetShows({
    page,
    limit,
    type,
  });

  const observer = useRef();

  //when lastShowRef corresponding element created then this callback will be called
  const lastShowRef = useCallback(
    (element) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 0.0 }
      );

      if (element) observer.current.observe(element);
    },
    [isLoading, hasNextPage]
  );
  const handlePrevClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };
  return (
    <section
      name="slider-container"
      className="w-full  relative group box-border"
    >
      <div
        onClick={handlePrevClick}
        className={`
          flex absolute opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#222] z-[100] top-0 bottom-0 left-0  px-2 items-center transition-opacity duration-300 ease-linear cursor-pointer
          `}
      >
        <i className="fa-solid fa-angle-left text-white text-3xl"></i>
      </div>

      <ul
        ref={sliderRef}
        name="slider"
        className="grid grid-flow-col auto-cols-[27%] sm:auto-cols-[17%] lg:auto-cols-[11%] px-4 gap-4 overflow-x-scroll smooth-scroll no-scrollbar
        
        "
        //{snap-inline}
      >
        {showsData?.map((show, index) => {
          if (index === showsData.length - 10) {
            return (
              <li
                ref={lastShowRef}
                key={show._id}
                className="snap-start shadow-featuredBoxShadow relative bg-[#FFFFFF1F] rounded-xl"
              >
                <Link to={`/${show.type}/${show.title}/${show._id}`}>
                  <img
                    id={show._id}
                    src={show.thumbnail}
                    className="aspect-[3/4]  object-cover rounded-xl cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-white rounded-xl  opacity-0 hover:opacity-[.15] transition-opacity duration-300 "></div>
                  {isPremiumContent && (
                    <img
                      src={premium_icon}
                      alt=""
                      className="absolute top-1 left-1 "
                    />
                  )}
                </Link>
              </li>
            );
          }
          return (
            <li
              key={show._id}
              className="snap-start shadow-featuredBoxShadow relative  bg-[#FFFFFF1F] rounded-xl"
            >
              <Link to={`/${show.type}/${show.title}/${show._id}`}>
                <img
                  id={show._id}
                  src={show.thumbnail}
                  className="aspect-[3/4] object-center object-cover rounded-xl cursor-pointer "
                />
                <div className="absolute inset-0 bg-white rounded-xl  opacity-0 hover:opacity-[0.15] transition-opacity duration-300 "></div>
                {isPremiumContent && (
                  <img
                    src={premium_icon}
                    alt=""
                    className="absolute top-1 left-1 "
                  />
                )}
              </Link>
            </li>
          );
        })}
        {isLoading && (
          <li key="loading" className="p-4 self-center">
            <Oval
              height={50}
              width={50}
              color="#d9008d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="##d9008d"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          </li>
        )}
        {error && (
          <p className=" self-center justify-self-center text-lg text-rose-700">
            {!hasNextPage ? "The End" : error?.data?.message}
          </p>
        )}
      </ul>

      <div
        onClick={handleNextClick}
        className={`
          absolute flex opacity-0 group-hover:opacity-100 bg-gradient-to-l from-[#222] z-[100] top-0 bottom-0 right-0  px-2 items-center transition-opacity duration-300 ease-linear cursor-pointer
          `}
      >
        <i className="fa-solid fa-angle-right text-white text-3xl"></i>
      </div>
    </section>
  );
};

export default ShowsSlider;
