import { createRequestToken, redirectToTMDBLogin } from "../services/tmdbAuth";

const LoginBtn = () => {
  const handleOnClick = async () => {
    const requestToken = await createRequestToken();
    redirectToTMDBLogin(requestToken);
  };

  return <button onClick={handleOnClick}>Login</button>;
};

export default LoginBtn;
