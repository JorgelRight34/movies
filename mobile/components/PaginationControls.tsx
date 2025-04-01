import AccentButton from "./AccentButton";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  next: () => void;
  back: () => void;
}

const PaginationControls = ({
  page,
  totalPages,
  next,
  back,
}: PaginationControlsProps) => {
  return (
    <Box className="p-3">
      <AccentButton className="mb-3" disabled={page - 1 <= 0} onPress={back}>
        Atrás
      </AccentButton>
      <AccentButton
        className="mb-3"
        disabled={page + 1 > totalPages}
        onPress={next}
      >
        Siguiente
      </AccentButton>
    </Box>
  );
};

export default PaginationControls;
