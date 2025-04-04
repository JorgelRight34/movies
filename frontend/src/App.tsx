import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import LoadingBar from "./components/common/LoadingBar";
import { Bounce, ToastContainer } from "react-toastify";
import ScrollToTop from "./components/common/ScrollToTop";

const Index = lazy(() => import("./pages/Index/Index"));
const Approved = lazy(() => import("./pages/Approved"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const MovieList = lazy(() => import("./pages/MovieList/MovieList"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SearchMovieResults = lazy(
  () => import("./pages/SearchMovieResults/SearchMovieResults")
);

function App() {
  return (
    <>
      <LoadingBar />
      <Router>
        <ScrollToTop />
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/movies/list/:filter" element={<MovieList />} />
            <Route path="/movies/search" element={<SearchMovieResults />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
