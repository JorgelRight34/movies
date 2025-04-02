import { useEffect } from "react";
import { createSessionId } from "../data/tmdbAuth";
import { useNavigate } from "react-router";

/**
 * Page component for when user accepts to be authenticated by TMDB after a redirection
 * An effect then occurs to create a sessionId for the user, after that the user is redirected
 * to the home page, the session id is stored on localStorage.
 *
 * @component
 * @returns {JSX.Element} The rendered approved page component.
 */
const Approved = () => {
  const navigate = useNavigate();

  const handleRedirect = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const requestToken = urlParams.get("request_token");

    if (!requestToken) return;

    const sessionId = await createSessionId(requestToken);
    if (sessionId) {
      localStorage.setItem("sessionId", sessionId);
      navigate("/");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return <div></div>;
};

export default Approved;
