import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import LoadingBar from "./components/LoadingBar";
import { Bounce, ToastContainer } from "react-toastify";
import Favorites from "./pages/Favorites";

const Index = lazy(() => import("./pages/Index"));
const Approved = lazy(() => import("./pages/Approved"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <LoadingBar />
      <Router>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
