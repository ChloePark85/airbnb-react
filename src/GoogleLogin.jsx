import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const clientId =
//   "832791327086-jjoar09ipeamtanhrj6091bedqn829of.apps.googleusercontent.com";

const GoogleButton = () => {
  return (
    <GoogleOAuthProvider clientId="832791327086-jjoar09ipeamtanhrj6091bedqn829of.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleButton;
