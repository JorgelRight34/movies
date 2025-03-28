import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import LoadingBar from "./components/LoadingBar";
import MovieDetails from "./pages/MovieDetails";
import { Bounce, ToastContainer } from "react-toastify";

const Index = lazy(() => import("./pages/Index"));

function App() {
  return (
    <>
      <LoadingBar />
      <Router>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
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
