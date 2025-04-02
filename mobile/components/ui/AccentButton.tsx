import { ReactNode } from "react";
import { Button, ButtonText } from "./button";
import theme from "@/styles/theme";

interface AccentButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  onPress?: () => void;
}

const AccentButton = ({
  onPress,
  isDisabled = false,
  className = "",
  children,
}: AccentButtonProps) => {
  return (
    <Button
      className={className}
      isDisabled={isDisabled}
      onPress={onPress}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default AccentButton;
