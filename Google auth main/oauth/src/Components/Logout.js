import { GoogleLogout } from "react-google-login";

const clientId =
  "693269405611-76ni091ft9tvmdstsflrts255del06ts.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("Log out Successfull!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
