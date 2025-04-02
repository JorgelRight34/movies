import { handleTMDBAuth } from "../../data/tmdbAuth";

/**
 * Component that Handles TMDB login.
 *
 * @component
 * @returns A button to trigger the login process with TMDB
 */
const LoginBtn = () => {
  return (
    <button className="btn btn-accent px-3" onClick={handleTMDBAuth}>
      Iniciar Sesión
    </button>
  );
};

export default LoginBtn;
