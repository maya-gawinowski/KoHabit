import React from "react";
import { DialogAuth } from "react-mui-auth-page";

const MyDialogAuthComponent = () => {
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = async ({ email, name, password }) => {
    await doSomethingAsyn();
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  const handleSocial = {
    Google: () => {},
    Github: () => {},
  };

  return (
    <DialogAuth
      open={true}
      textFieldVariant="outlined"
      onClose={handleClose}
      handleSignUp={handleSignUp}
      handleForget={handleForget}
      handleSignIn={handleSignIn}
      handleSocial={handleSocial}
    />
  );
};

export default MyDialogAuthComponent;