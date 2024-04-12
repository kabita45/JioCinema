import ShowsSlider from "./ShowsSlider";
import showCategories from "../../constants/showCategories";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListOfShows = () => {
  const isPremiumUser = useSelector((state) => state.isPremiumUser);
  return (
    <section name="shows">
      <ul>
        {showCategories.map((showCategory, index) => {
          return (
            <li key={showCategory.type.toLowerCase()} className="pb-10">
              {showCategory.featuredShow && (
                <Link
                  to={
                    isPremiumUser
                      ? `${showCategory.type}/${
                          showCategory.featuredShowName
                        }/${index + 1}/watch`
                      : showCategory.premium
                      ? "/subscription"
                      : `${showCategory.type}/${
                          showCategory.featuredShowName
                        }/${index + 1}/watch`
                  }
                  state={{
                    showLink:
                      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd51f.mp4",
                  }}
                >
                  <div className="mx-8 my-6 overflow-hidden cursor-pointer relative ">
                    <img
                      src={showCategory.featuredShow}
                      alt="featured_show"
                      className="rounded-3xl shadow-featuredBoxShadow "
                    />
                    <div className="absolute inset-0 bg-white rounded-3xl  opacity-0 hover:opacity-5 transition-opacity duration-300 "></div>
                  </div>
                </Link>
              )}
              <div className="flex justify-between px-4 pb-1 items-center">
                <h3 className="text-white font-semibold text-2xl ">
                  {showCategory.type}
                </h3>
                <Link to={`${showCategory.type.toLocaleLowerCase()}`}>
                  <i className="fa-solid fa-angles-right hover:scale-125 transition-transform  text-xl cursor-pointer"></i>
                </Link>
              </div>
              <ShowsSlider
                type={showCategory.type.toLowerCase()}
                isPremiumContent={showCategory.premium}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListOfShows;
