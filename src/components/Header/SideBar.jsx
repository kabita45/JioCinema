/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { profile_avatar } from "../../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const SideBar = ({ setSideBarVisible: { closeSideBar, sideBarRef } }) => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.signinDetails.userDetails);
  const isPremiumUser = useSelector((state) => state.isPremiumUser);

  const dispatch = useDispatch();

  return (
    <section
      name="sidebar "
      className="w-[100%] h-[100%] fixed top-0 left-0 bg-defaultBackground bg-opacity-90 z-[999] "
    >
      <motion.div
        ref={sideBarRef}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        className="w-[80%] md:w-[365px] h-full bg-defaultBackground border border-black absolute top-0 right-0 z-[999]"
      >
        <section
          name="user-info"
          className=" text-white h-[50px] flex items-center relative "
        >
          <div
            className="flex items-center w-full h-full hover:bg-buttonBackground hover:bg-opacity-1 transition-colors duration-150 ease-linear cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigate(
                `${
                  userDetails?.name
                    ? (closeSideBar(), "/youraccount")
                    : "/signin"
                }`
              );
            }}
          >
            <span className="ml-9 mr-2 leading-3">
              <img src={profile_avatar} alt="profile_image" className="w-10" />
            </span>
            <p className=" text-lg font-bold flex-1">
              Hello, {userDetails?.name || "Sign In"}
            </p>
          </div>
          <span
            className="flex border px-[10px] py-2 absolute text-white -left-[10px]  transform -translate-x-[100%]  hover:text-pink hover:border-pink transition-colors duration-200 ease-linear cursor-pointer"
            onClick={closeSideBar}
          >
            <i className="fa-solid fa-x"></i>
          </span>
        </section>
        <section name="sidebar-items">
          <ul
            onClick={() => closeSideBar()}
            className="overscroll-contain h-full  pt-[10px]  text-defaultTextColor"
          >
            <li>
              <Link to="/movie" className="sideBarItems">
                <p className="">Movies</p>
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </Link>
            </li>
            {!isPremiumUser && (
              <li>
                <Link to="/subscription" className="sideBarItems">
                  <p className="">Subscribe Now!</p>
                  <span>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </li>
            )}
            {userDetails?.name && (
              <li>
                <Link to="watchlist" className="sideBarItems">
                  <p className="">WatchList</p>
                  <span>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </li>
            )}
            <li>
              <hr className="border-t border-defaultBorderColor opacity-30 my-4" />
            </li>
            <li>
              <Link
                to="https://help.jiocinema.com/?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                target="_blank"
                className="sideBarItems"
              >
                <p className="">Help & Legal</p>
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </Link>
            </li>
            {userDetails?.name && (
              <li
                onClick={() => dispatch({ type: "reset_store" })}
                className="sideBarItems"
              >
                <p className="">Sign Out</p>
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </li>
            )}
          </ul>
        </section>
        <div className="mx-9 mt-[100%] text-pink underline underline-offset-2 text-xs font-medium defaultLink">
          <Link
            to="https://help.jiocinema.com/articles/terms-and-conditions/privacy-policy/641d3829d903444a7aef49b1?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
            target="_blank"
          >
            Privacy and T&C
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SideBar;
