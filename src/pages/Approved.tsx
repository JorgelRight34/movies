import { useEffect } from "react";
import { createSessionId } from "../services/tmdbAuth";
import { useNavigate } from "react-router";

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
