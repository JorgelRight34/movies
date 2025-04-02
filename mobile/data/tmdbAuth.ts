import axios from "axios";
import { ACCESS_TOKEN, API_KEY } from "../lib/constants";

export const createRequestToken = async () => {
  // Create request token
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/token/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.request(options);

  return response.data.request_token;
};

export const redirectToTMDBLogin = (requestToken: string) => {
  const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/approved`;
  window.location.href = redirectUrl;
};

export const createSessionId = async (requestToken: string) => {
  // Convert request token to session ID
  const response = await axios.post(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
    { request_token: requestToken }
  );

  return response.data.session_id;
};

export const handleTMDBAuth = async () => {
  const requestToken = await createRequestToken();
  redirectToTMDBLogin(requestToken);
};