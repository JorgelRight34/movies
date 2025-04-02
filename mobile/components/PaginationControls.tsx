import AccentButton from "./ui/AccentButton";
import { Box } from "./ui/box";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  next: () => void;
  back: () => void;
}

/**
 * Interactive pagination controls for navigating between pages of content.
 * Provides "Previous" and "Next" buttons with disabled states when at boundaries,
 * and displays current page/total pages count. Designed for use with lists, tables,
 * or grid layouts that require pagination.
 *
 * @component
 * @example
 *
 * @param {Object} props - Component properties
 * @param {number} props.page - Current active page (1-indexed)
 * @param {number} props.totalPages - Total available pages
 * @param {() => void} props.next - Callback triggered when next page is requested
 * @param {() => void} props.back - Callback triggered when previous page is requested
 * @returns {React.ReactElement} A row with navigation buttons and page indicator
 */
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
