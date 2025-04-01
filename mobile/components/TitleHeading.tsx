import { ReactNode } from "react";
import { Heading } from "./ui/heading";
import styles from "@/styles/styles";

interface TitleHeadingProps {
  className?: string;
  children: ReactNode;
}

const TitleHeading = ({ className = "", children }: TitleHeadingProps) => {
  return (
    <Heading
      className={`pl-2 text-white mb-3 ${className}`}
      style={styles.borderLeftAccent}
    >
      {children}
    </Heading>
  );
};

export default TitleHeading;
