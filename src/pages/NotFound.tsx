import { useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * Page component for when accesing a route that doesn't exist.
 * The user gets inmediatly redirected to the root route "/".
 *
 * @component
 * @returns {JSX.Element} The rendered not found page component.
 */
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default NotFound;
