import { ReactNode } from "react";
import Layout from "./Layout";

interface MovieListLayoutProps {
  title: string;
  page: number;
  totalPages: number;
  children: ReactNode;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

const MovieListLayout = ({
  title,
  page,
  totalPages,
  goToNextPage,
  goToPrevPage,
  children,
}: MovieListLayoutProps) => {
  const scrollToTop = () => document.getElementById("root")?.scrollTo(0, 0);

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
      <div className="bg-dark">
        <section className="p-3 p-lg-5">
          <h3 className="border-accent-left mb-3">{title}</h3>
          <div className="d-flex justify-content-center flex-wrap gap-5 gap-lg-3 py-3 py-lg-5">
            {children}
          </div>
        </section>
        <div className="w-100 d-flex justify-content-center mt-5 mb-5">
          <div>
            <button
              className="btn btn-accent px-3 me-3"
              onClick={handlePrevPage}
              disabled={page - 1 <= 0}
            >
              <span className="d-flex align-items-center">
                <span className="material-icons-outlined me-2">arrow_back</span>
                Atrás
              </span>
            </button>
            <button
              className="btn btn-accent px-3"
              onClick={handleNextPage}
              disabled={page + 1 > totalPages}
            >
              <span className="d-flex align-items-center">
                Siguiente
                <span className="material-icons-outlined ms-2">
                  arrow_forward
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieListLayout;
