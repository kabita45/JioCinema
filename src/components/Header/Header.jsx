import { jiocinema_logo, profile_avatar } from "../../assets/images";
import {
  NavLink,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import useToggleComponent from "../../hooks/useToggleComponent";
import SideBar from "./SideBar";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [sideBar, setSideBar, sideBarRef] = useToggleComponent(false);
  const navigate = useNavigate();

  const isPremiumUser = useSelector((state) => state.isPremiumUser);

  const timeoutId = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  //use debounce technique
  const updateSearchParams = (text) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setSearchParams({ showname: text.trim() });
    }, 1000);
  };

  const handleSearchInputChange = (e) => {
    if (searchParams.get("showname") !== e.target.value.trim())
      updateSearchParams(e.target.value);
  };

  const openSideBar = (e) => {
    e.stopPropagation();
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };
  useEffect(() => {
    if (sideBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sideBar]);

  return (
    <>
      <header className="h-20 flex justify-between px-4 md:px-12 py-3 bg-defaultBackground  sticky top-0 left-0 right-0 z-[999]">
        <nav
          className={`gap-4 flex ${
            location.pathname === "/search" && "hidden"
          }`}
        >
          <ul className=" flex gap-4 items-center">
            <li>
              <NavLink to="/">
                <img
                  src={jiocinema_logo}
                  alt="website-logo"
                  className=" cursor-pointer w-32"
                />
              </NavLink>
            </li>
            {!isPremiumUser && (
              <li className="hidden xs:inline-block relative">
                <NavLink to="subscription">
                  <button className="text-premiumColor px-4 py-1 text-xs font-medium border-2 border-premiumColor rounded-3xl">
                    Subscribe
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="hidden gap-4 mdl:flex items-center md text-white text-sm font-semibold">
            <li className="">
              <NavLink
                to="."
                className={({ isActive }) =>
                  isActive
                    ? `p-3 shadow-navLinkShadow transition-shadow duration-300 ease-linear rounded-3xl`
                    : `p-3`
                }
              >
                For You
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movie"
                className={({ isActive }) =>
                  isActive
                    ? `p-3 shadow-navLinkShadow transition-shadow duration-300 ease-linear rounded-3xl`
                    : `p-3`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tv show"
                className={({ isActive }) =>
                  isActive
                    ? `p-3 shadow-navLinkShadow transition-shadow duration-300 ease-linear rounded-3xl`
                    : `p-3 `
                }
              >
                Shows
              </NavLink>
            </li>

            <li>
              <NavLink
                to="trailer"
                className={({ isActive }) =>
                  isActive
                    ? `p-3 shadow-navLinkShadow transition-shadow duration-300 ease-linear rounded-3xl`
                    : `p-3 `
                }
              >
                Premium
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="flex-grow flex">
          <ul className="w-full flex gap-4 lg:gap-2 items-center justify-end">
            {location.pathname === "/search" ? (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/search") return;
                  navigate("/search");
                }}
                className="w-full flex border px-[14px]  border-[#aaa] rounded-3xl focus:border-white overflow-hidden items-center"
              >
                <i
                  className="fa-solid fa-arrow-left text-white cursor-pointer text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                ></i>
                <input
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Search"
                  className="w-full bg-defaultBackground  p-2 outline-none"
                />
                <i className="fa-solid fa-magnifying-glass text-xl py-2"></i>
              </li>
            ) : (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/search") return;
                  navigate("/search");
                }}
                className="flex border-0 lg:border lg:px-[14px]  border-[#aaa] rounded-3xl focus:border-white overflow-hidden items-center"
              >
                <input
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Search"
                  className="bg-defaultBackground hidden lg:flex max-w-[170px] p-2 outline-none"
                />
                <i className="fa-solid fa-magnifying-glass text-xl py-2"></i>
              </li>
            )}

            <li
              className="hidden mdl:block cursor-pointer"
              onClick={openSideBar}
            >
              <img src={profile_avatar} alt="profile-avatar" className="w-10" />
            </li>

            <li className="mdl:hidden" onClick={openSideBar}>
              <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
            </li>
          </ul>
        </nav>
      </header>
      {sideBar && (
        <SideBar setSideBarVisible={{ sideBar, closeSideBar, sideBarRef }} />
      )}
    </>
  );
};

export default Header;
