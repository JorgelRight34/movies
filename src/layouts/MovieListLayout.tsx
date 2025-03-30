import { ReactNode, useRef } from "react";
import Layout from "./Layout";

interface MovieListLayoutProps {
  title: string;
  children: ReactNode;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

const MovieListLayout = ({
  title,
  goToNextPage,
  goToPrevPage,
  children,
}: MovieListLayoutProps) => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () =>
    topRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleNextPage = () => {
    scrollToTop();
    goToNextPage();
  };

  const handlePrevPage = () => {
    scrollToTop();
    goToPrevPage();
  };

  return (
    <Layout>
      <div ref={topRef}></div>
      <div className="bg-dark">
        <section className="p-3 p-lg-5">
          <h3 className="mb-3">{title}</h3>
          <div className="d-flex justify-content-center flex-wrap gap-5 gap-lg-3 py-3 py-lg-5">
            {children}
          </div>
        </section>
        <div className="w-100 d-flex justify-content-center mt-5 mb-5">
          <button className="btn btn-accent px-3 me-3" onClick={handlePrevPage}>
            Previous Page
          </button>
          <button className="btn btn-accent px-3" onClick={handleNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MovieListLayout;
