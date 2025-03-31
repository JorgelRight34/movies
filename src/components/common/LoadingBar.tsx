import { useRef } from "react";
import TopLoadingBar from "react-top-loading-bar";

export const loadingBarRef = { current: null as TopLoadingBar | null };

/**
 * Starts filling the loading bar.
 *
 */
export const startLoadingBar = () => {
  loadingBarRef.current?.continuousStart();
};

/**
 * Completes filling the loading bar and then it unfills it.
 *
 */
export const completeLoadingBar = () => {
  loadingBarRef.current?.complete();
};

/**
 * Loading bar component for representing a progress.
 * This loading bar is used to mark the progress of the HTTP requests (via interceptors) made by the
 * api global object of api.tsx, which is an instance of an axios.
 *
 * @component
 * @returns {JSX.Element} The rendered favorite loading bar component.
 */
const LoadingBar = () => {
  // prettier-ignore
  loadingBarRef.current = useRef<TopLoadingBar>(null).current;

  return (
    <TopLoadingBar color="red" ref={(ref) => (loadingBarRef.current = ref)} />
  );
};

export default LoadingBar;
