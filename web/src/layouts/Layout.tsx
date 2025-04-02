import { ReactNode } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component for all pages. Includes the navbar and footer of the app.
 *
 * @component
 * @param {ReactNode} [props.children] - Child elements to render.
 * @returns {JSX.Element} The rendered movie backdrop component.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
