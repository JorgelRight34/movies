import { handleTMDBAuth } from "../../data/tmdbAuth";

const LoginBtn = () => {
  return (
    <button className="btn btn-accent px-3" onClick={handleTMDBAuth}>
      Log In
    </button>
  );
};

export default LoginBtn;
