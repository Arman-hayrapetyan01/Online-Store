import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { googleRegistrSuccess } from "../../redux/actions/index";

const GoogleSignInButton = () => {
  const clientId =
    "919034197341-0dbiqj1d2no6175je9ik08a88snn55pe.apps.googleusercontent.com";
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const user = {
      googleId: res.profileObj.googleId,
      googleEmail: res.profileObj.email,
      googleFirstName: res.profileObj.familyName,
      googleLastName: res.profileObj.givenName,
      googleImage: res.profileObj.imageUrl,
    };
    dispatch(googleRegistrSuccess(user));
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleSignInButton;
