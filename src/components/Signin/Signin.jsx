import { jiocinema_logo } from "../../assets/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { userSignin } from "../../redux/signinAction";

import Error from "./Error";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const SignIn = () => {
  const emailRef = useRef({});
  const passwordRef = useRef({});

  const auth = getAuth();
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signinDetails = useSelector((state) => state.signinDetails) || {};

  const [userDetailsErrors, setUserDetailsErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleFormSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const errors = {
      emailError: email ? "" : "Enter your email",
      passwordError: password ? "" : "Enter your password",
    };

    if (errors.emailError || errors.passwordError) {
      setUserDetailsErrors({ ...errors });
      return;
    } else {
      setUserDetailsErrors({ ...errors });
    }

    dispatch(userSignin(auth, navigate, location, { email, password }));
  };

  return (
    <section
      name="signin"
      className="h-screen bg-defaultBackground overflow-y-scroll"
    >
      <div className="max-w-[350px] mx-auto flex flex-col items-center">
        <NavLink to="/">
          <div>
            <img className="py-4" src={jiocinema_logo} alt="jiocinema-logo" />
          </div>
        </NavLink>

        {signinDetails.loading ? (
          <div className="mb-4">
            <RotatingLines
              strokeColor="#d9008d"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div>
        ) : signinDetails.loggedIn === "Failed" &&
          emailRef?.current?.value &&
          passwordRef?.current?.value ? (
          <Error
            email={emailRef.current.value}
            errorMessage={signinDetails.error}
          />
        ) : signinDetails.loggedIn === "Success" ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed bottom-4 text-white right-4 p-4 bg-green-500 rounded shadow-lg`}
          >
            SingIn successful!
          </motion.div>
        ) : (
          ""
        )}
        <section className="border border-lightGray rounded-lg px-6 py-4">
          <form
            noValidate
            action=""
            className="grid gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-[28px] font-medium">Sign in</h2>
            <div>
              <label htmlFor="email" className="text-sm leading-4 font-medium">
                Email
              </label>
              <input
                className="inputBox"
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                autoComplete="email"
              />
              {userDetailsErrors.emailError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.emailError}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm leading-4 font-medium"
              >
                Password
              </label>
              <input
                className="inputBox"
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                autoComplete="current-password"
              />
              {userDetailsErrors.passwordError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.passwordError}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="customButton"
              onClick={handleFormSubmit}
            >
              Continue
            </button>
            <p className="text-footerItemColor text-xs leading-4 mt-4 px-2 text-center">
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
          </form>
        </section>
        <div className="w-full text-xs text-[#767676] font-medium mt-4 flex items-center">
          <span className="w-1/3 h-[1px]  bg-lightGray inline-flex"></span>
          <span className="w-1/3 text-center">New to JioCinema?</span>
          <span className="w-1/3 h-[1px] bg-lightGray inline-flex"></span>
        </div>

        <div className="w-full py-4">
          <NavLink to="/register">
            <button className=" w-full text-sm text-footerItemColor p-1 border border-lightGray rounded-lg hover:bg-[#333] transform active:scale-95 transition-all ease-in-out">
              Create your JioCinema account
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
