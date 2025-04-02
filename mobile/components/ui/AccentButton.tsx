import { ReactNode } from "react";
import { Button, ButtonText } from "./button";
import theme from "@/styles/theme";

interface AccentButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onPress?: () => void;
}

const AccentButton = ({
  onPress,
  disabled = false,
  className = "",
  children,
}: AccentButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      onPress={onPress}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default AccentButton;
