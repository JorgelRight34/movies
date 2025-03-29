import { useEffect } from "react";
import { createSessionId } from "../services/tmdbAuth";

const Approved = () => {
  const handleRedirect = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const requestToken = urlParams.get("request_token");

    if (!requestToken) return;

    await createSessionId(requestToken);
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return <div></div>;
};

export default Approved;
