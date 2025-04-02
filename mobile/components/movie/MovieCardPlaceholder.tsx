import theme from "@/styles/theme";
import AccentButton from "../ui/AccentButton";
import { Box } from "../ui/box";
import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Skeleton, SkeletonText } from "../ui/skeleton";

/**
 * Component that serve as loading screens for movies.
 *
 * @component
 */
const MovieCardPlaceholder = () => {
  return (
    <Card
      className="rounded-lg border p-0 w-[250px] m-3"
      style={{ backgroundColor: theme.colors.card }}
    >
      <Skeleton variant="sharp" className="h-[240px]" />
      <Box className="p-3">
        <Heading size="md" className="text-white mb-4">
          <SkeletonText _lines={1} className="h-5" />
        </Heading>
        <HStack className="mb-3">
          <SkeletonText _lines={1} className="h-6" />
        </HStack>
        <AccentButton>{""}</AccentButton>
      </Box>
    </Card>
  );
};

export default MovieCardPlaceholder;
