import { GoogleLogin } from "react-google-login";

const clientId =
  "693269405611-76ni091ft9tvmdstsflrts255del06ts.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => [
    console.log("LOGIN SUCCESS! Current user", res.profileObj),
  ];
  const onFailure = (res) => [console.log("LOGIN FAILED! res:", res)];

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        isSignedIn="true"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
