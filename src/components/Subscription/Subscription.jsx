import { useState, useEffect } from "react";
import { premiumShowSlides } from "../../assets/premiumShowSlides";
import { subscriptionPageBg } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch } from "react-redux";

const Subscription = () => {
  const [slideImagePosition, setSlideImagePosition] = useState(0);

  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const handleNextClick = () => {
    setSlideImagePosition((prevPosition) =>
      prevPosition === -(premiumShowSlides.length - 1) ? 0 : prevPosition - 1
    );
  };

  const dispatch = useDispatch();

  const handleBuySubscription = () => {
    if (!userDetails?.name) {
      return navigate("/signin", {
        state: { originPath: location.pathname },
      });
    }
    dispatch({ type: "buy_subscription" });
    open(true);
    setTimeout(() => {
      navigate("/");
    }, [2000]);
  };

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.signinDetails.userDetails);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, [3000]);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section name="subscription" className="text-white text-center">
      <div
        name="slider_container"
        className="min-h-[100vh] overflow-hidden bg-center bg- bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${subscriptionPageBg})` }}
      >
        <ul
          name="slider"
          style={{
            transform: `translateX(${slideImagePosition * 100}%)`,
          }}
          className=" flex transition-transform duration-500"
        >
          {premiumShowSlides.map((slide, index) => {
            return (
              <li
                name="slide"
                key={`slide_${index + 1}`}
                className="flex min-w-[100%]"
              >
                <img src={slide} alt="show-image" />
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-center px-8 py-4 gap-4">
          <h1 className="font-bold text-xl sm:text-4xl">JioCinema Premium</h1>
          <h2 className=" text-xs sm:text-lg  font-medium">
            Welcome to the new home of all your favorite Hollywood content. The
            biggest, the best. Exclusively yours.
          </h2>

          <div className="w-[280px] sm:w-[550px]  px-2 sm:px-6 pt-6 sm:pt-4 pb-2 border border-premiumColor premium-gradient rounded-xl text-xs sm:text-lg text-start">
            {/* // */}
            <div className="px-3">
              <label
                htmlFor="premium_content"
                className="font-bold text-lg sm:text-2xl"
              >
                Best of Hollywood
              </label>
              <ul
                id="premium_content"
                className="font-thin sm:font-medium list-disc list-inside"
              >
                <li className="">Watch on any device</li>
                <li className="">Highest video & audio quality</li>
                <li className="">Upto 4 devices simultaneously</li>
              </ul>
            </div>
            {/* // */}
            <div className="py-2 flex justify-between items-center">
              <div className="border border-premiumColor text-premiumColor px-2 py-1 rounded-md ">
                12 Months
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold">
                  <sup className=" font-light font-serif ">₹</sup>999
                </span>
              </div>
            </div>
          </div>
          {/* // */}

          <p className="text-extraLightGray text-xs sm:text-sm leading-4 mt-4 px-2 text-center">
            By continuing you agree to our{" "}
            <span>
              {" "}
              <NavLink
                to="https://help.jiocinema.com/articles/terms-and-conditions/terms-and-conditions/641d382892cd636d4c10983d?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                target="_blank"
                className="defaultLink"
              >
                Terms of Use
              </NavLink>{" "}
            </span>
            and acknowledge that you have read our{" "}
            <span className="">
              <NavLink
                to="https://help.jiocinema.com/articles/terms-and-conditions/privacy-policy/641d3829d903444a7aef49b1?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                target="_blank"
                className="defaultLink"
              >
                Privacy Policy.
              </NavLink>
            </span>
          </p>

          {/* // */}
          <button
            onClick={handleBuySubscription}
            className="customButton sm:text-lg  font-semibold rounded-3xl"
          >
            Continue and pay ₹999
          </button>
        </div>
      </div>
      {
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={false}
          centered
          size="auto"
          padding="0"
          overlayProps={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2],
            opacity: 0.55,
            blur: 3,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`relative p-4 bg-green-500 font-medium text-white rounded shadow-lg`}
          >
            Subscribed Successfully!
          </motion.div>
        </Modal>
      }
    </section>
  );
};

export default Subscription;
