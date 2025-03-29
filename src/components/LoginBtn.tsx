import { createRequestToken, redirectToTMDBLogin } from "../services/tmdbAuth";

const LoginBtn = () => {
  const handleOnClick = async () => {
    const requestToken = await createRequestToken();
    redirectToTMDBLogin(requestToken);
  };

  return (
    <button className="btn btn-accent px-3" onClick={handleOnClick}>
      Login
    </button>
  );
};

export default LoginBtn;
