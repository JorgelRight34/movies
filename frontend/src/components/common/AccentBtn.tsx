import { ReactNode } from "react";

interface AccentBtnProps {
  children: ReactNode;
  className?: string;
}

const AccentBtn = ({ className, children }: AccentBtnProps) => {
  return (
    <button
      className={`btn btn-accent px-5 w-100 ${
        className ? " " + className : ""
      } `}
    >
      {children}
    </button>
  );
};

export default AccentBtn;
