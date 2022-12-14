import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user?.uid) {
    navigate(from, { replace: true });
  }

  let signInError;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    signInError = <p className="text-red-500">{error?.message}</p>;
  }
  return (
    <>
      {signInError}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent"
      >
        CONTINUE WITH GOOGLE
      </button>
    </>
  );
};

export default SocialLogin;
