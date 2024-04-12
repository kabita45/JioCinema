import { useState, useRef } from "react";
import { jiocinema_logo } from "../../assets/images";
import { NavLink } from "react-router-dom";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../firebase.config";
console.log(app);

const Registration = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSignupSuccess, setSignupSuccess] = useState("Pending");
  const [registrationError, setRegistrationError] = useState("");

  const auth = getAuth();

  const navigate = useNavigate();

  const nameRef = useRef({});
  const emailRef = useRef({});

  const passwordRef = useRef({});

  const [userDetailsErrors, setUserDetailsErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  };

  const handleFormSubmitClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const password = passwordRef.current.value;

    const errors = {
      nameError: name ? "" : "Enter your name",
      emailError: email
        ? isValidEmail(email)
          ? ""
          : "Enter a valid email address"
        : "Enter your email",
      passwordError: password
        ? password.length > 5
          ? ""
          : "Passwords must be at least 6 characters"
        : "Enter your password",
    };

    if (errors.nameError || errors.emailError || errors.passwordError) {
      setUserDetailsErrors({ ...errors });
      setSignupSuccess("Pending");
      return;
    } else {
      //if error not exists this will remove the previous errors
      setUserDetailsErrors({ ...errors });
    }

    //registration started
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // Set the user's name (displayName)
        updateProfile(user, {
          displayName: name,
          photoURL: "", // You can optionally set a photo URL as well
        })
          .then(() => {
            console.log("Name (displayName) set successfully.");
          })
          .catch((error) => {
            console.error("Error setting name (displayName):", error);
          });

        //registration successful
        setLoading(false);
        setSignupSuccess("Success");
        setRegistrationError("");

        setTimeout(() => {
          setSignupSuccess("Pending");
          navigate("/signin");
        }, 2000);

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

        //registration failed
        setLoading(false);
        setSignupSuccess("Failed");
        setRegistrationError(errorMessage);
      });
  };

  return (
    <section name="registration" className="h-screen overflow-y-scroll ">
      <section className="max-w-[350px] mx-auto flex flex-col items-center">
        <NavLink to="/">
          <div>
            <img className="py-4" src={jiocinema_logo} alt="jiocinema-logo" />
          </div>
        </NavLink>

        {isLoading ? (
          <div className="mb-4">
            <RotatingLines
              strokeColor="#d9008d"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div>
        ) : isSignupSuccess === "Success" ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed text-white bottom-4 right-4 p-4 bg-green-500 rounded shadow-lg`}
          >
            Registration successful!
          </motion.div>
        ) : isSignupSuccess === "Failed" ? (
          <Error
            email={emailRef.current.value}
            errorMessage={registrationError}
          />
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
            <h2 className="text-[28px] font-medium">Create Account</h2>

            <div>
              <label htmlFor="name" className="text-sm leading-4 font-medium">
                Your name
              </label>
              <input
                className="inputBox "
                type="text"
                name="name"
                id="name"
                placeholder="First and last name"
                ref={nameRef}
                autoComplete="name"
              />
              {userDetailsErrors.nameError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.nameError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm leading-4 font-medium">
                Email
              </label>
              <input
                className="inputBox"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
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
                placeholder="At least 6 characters"
                ref={passwordRef}
                autoComplete="current-password"
              />
              {userDetailsErrors.passwordError ? (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userDetailsErrors.passwordError}
                </p>
              ) : (
                <div className="text-xs mt-1">
                  <span className="text-blue-600 text-sm italic pl-1 pr-2 font-serif font-semibold">
                    i
                  </span>
                  Passwords must be at least 6 characters.
                </div>
              )}
            </div>

            <button
              type="submit"
              className="customButton"
              onClick={handleFormSubmitClick}
            >
              Continue
            </button>
          </form>

          <div className="mt-8 pt-5 border-t-[1px] border-lightGray">
            <NavLink to="/signin">
              <p className="text-sm text-center">
                Already have an account?{" "}
                <span className="defaultLink">
                  Sign in
                  <i className="fa-solid fa-angles-right pl-[2px]"></i>
                </span>
              </p>
            </NavLink>
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
          </div>
        </section>
      </section>
    </section>
  );
};

export default Registration;
