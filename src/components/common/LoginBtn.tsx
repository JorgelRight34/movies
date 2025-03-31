import { handleTMDBAuth } from "../../data/tmdbAuth";

const LoginBtn = () => {
  return (
    <button className="btn btn-accent px-3" onClick={handleTMDBAuth}>
      Iniciar Sesión
    </button>
  );
};

export default LoginBtn;
