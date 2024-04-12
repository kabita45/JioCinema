import useGetShows from "../../hooks/useGetShows";
import { Link, useSearchParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const SearchShows = () => {
  const { isLoading, error, showsData } = useGetShows({ limit: 500 });

  const [searchParams] = useSearchParams();

  const searchKey = searchParams.get("showname");

  let filteredShows = searchKey
    ? showsData.filter((show) =>
        show.title.toLowerCase().includes(searchKey?.toLowerCase())
      )
    : [];
  const filteredShowsLength = filteredShows.length;

  filteredShows = filteredShows.length ? filteredShows : showsData;

  return (
    <section name="show_type" className="p-4 mdl:p-5 mb-10">
      {filteredShowsLength === 0 && searchKey && (
        <>
          <h1 className="text-white font-semibold text-3xl">
            No Result found for {`"${searchKey}"`}{" "}
          </h1>
          <h2 className="mb-5">
            Please try searching again with another keyword or choose something
            to watch from below
          </h2>
        </>
      )}
      <div className="flex flex-wrap pr-4 mdl:pr-5 scroll-smooth">
        {filteredShows?.map((show) => {
          return (
            <Link
              key={show._id}
              to={`${show.title}/${show._id}`}
              className="pl-4 pt-4 mdl:pl-5 mdl:pt-5 w-1/2 xs:w-1/3 md:w-1/4 mdl:w-1/6 featuredBoxShadow "
            >
              <div className="relative bg-[#FFFFFF1F] rounded-xl">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="aspect-[3/4] object-center object-cover rounded-xl cursor-pointer"
                />
                <div className="absolute inset-0 bg-white rounded-xl  opacity-0 hover:opacity-[.15] transition-opacity duration-300 "></div>
              </div>
              <p className="text-center text-xs font-semibold px-2 pt-2">
                {show.title}
              </p>
            </Link>
          );
        })}
        {isLoading && (
          <div key="loading" className="p-4 flex-1">
            <Oval
              height={50}
              width={50}
              color="#d9008d"
              wrapperStyle={{ justifyContent: "center", alignItems: "center" }}
              wrapperClass=" "
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="##d9008d"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          </div>
        )}
        {error && (
          <p className="pl-4 m-auto text-center text-lg text-rose-700">
            {error?.data?.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchShows;
