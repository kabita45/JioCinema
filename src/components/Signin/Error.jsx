// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import { errorSign } from "../../assets/images";
// eslint-disable-next-line react/prop-types
const Error = ({ email, errorMessage }) => {
  const error = errorMessage;
  return (
    <section className="flex gap-3 w-full mb-4 pl-5 py-4 pr-1 border border-[#ff0044d0] rounded-lg ">
      <div>
        <i className="text-error text-2xl fa-solid fa-triangle-exclamation"></i>
      </div>
      <div className="w-[280px] text-extraLightGray">
        <h3 className="text-lg font-medium text-error">There was a problem</h3>
        <p className="text-[13px] font-medium ">
          {(error.includes("wrong-password") && "Your password is incorrect") ||
            (error.includes("user-not-found") &&
              `We cannot find an account with that email address`) ||
            (error.includes("email-already-in-use") &&
              `Your provided Email ${email} has already been used. Please use another Email address.`) ||
            (error.includes("too-many-requests") &&
              "Too many requests. Please try logging in again after some time.") ||
            (error.includes("invalid-email") &&
              "Please enter a valid email address") ||
            (error.includes("invalid-login-credentials") &&
              "Invalid login credentials")}
        </p>
      </div>
    </section>
  );
};

export default Error;
