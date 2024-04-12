import Header from "./components/Header";
import FeaturedShows from "./components/FeaturedShows";
import ListOfShows from "./components/ListOfShows/ListOfShows";
import MediaShowcase from "./components/MediaShowcase";
import ShowType from "./components/ShowType";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Registration from "./components/Signin/Registration";
import Subscription from "./components/Subscription/Subscription";
import SearchShows from "./components/SearchShows";
import WatchShow from "./components/MediaShowcase/WatchShow";
import Watchlist from "./components/Watchlist/Watchlist";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop";
const App = () => {
  const CustomLayout = () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />
          <ScrollToTop />
        </main>
        <Footer />
      </>
    );
  };
  const Home = () => {
    return (
      <>
        <FeaturedShows />
        <ListOfShows />
      </>
    );
  };

  return (
    <BrowserRouter>
      <div
        name="JioCinema"
        className="min-h-[100vh] bg-defaultBackground text-defaultTextColor font-custom"
      >
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Home />} />
            <Route path=":show_type" element={<ShowType />} />
            <Route
              path=":show_type/:show_title/:id"
              element={<MediaShowcase />}
            />
            <Route
              path=":show_type/:show_title/:id/watch"
              element={<WatchShow />}
            />
            <Route path="search" element={<SearchShows />} />
            <Route path="watchlist" element={<Watchlist />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
