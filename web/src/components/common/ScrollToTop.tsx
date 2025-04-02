import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to the top of the page each time the user navigates.
 *
 * This component is typically used in combination with React Router to automatically
 * scroll the page to the top when the user navigates to a new route.
 *
 * @component
 * @returns {JSX.Element} A component that listens for route changes and scrolls
 * to the top when the route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
