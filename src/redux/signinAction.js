import { signInWithEmailAndPassword } from "firebase/auth";

export const signinStart = () => {
  return { type: "signin-started" };
};

export const signinSuccess = (payload) => {
  return { type: "signin-success", payload };
};

export const signinFailed = (payload) => {
  return { type: "signin-failed", payload };
};

export const userSignin = (auth, navigate, location, { email, password }) => {
  return (dispatch) => {
    dispatch(signinStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(signinSuccess({ name: user.displayName, email }));

        setTimeout(() => {
          navigate(location?.state?.originPath || "/");
        }, 1000);
      })
      .catch((error) => {
        console.dir(error.code);
        dispatch(signinFailed(error.message));
      });
  };
};
