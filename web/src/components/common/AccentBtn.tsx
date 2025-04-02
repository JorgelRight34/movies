import { ReactNode } from "react";

interface AccentBtnProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AccentBtn = ({ onClick, className, children }: AccentBtnProps) => {
  return (
    <button
      className={`btn btn-accent px-5 w-100 ${
        className ? " " + className : ""
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AccentBtn;
