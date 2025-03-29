import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useState } from "react";

interface RatingStarsProps {
  rating: number;
}

// 1 - Normalize rating
// 2 - Divide / 5
// 3 - If remaining > 0.5 then full start else half star

const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  const [value, setValue] = useState((rating - 1) / 2);

  return (
    <Box>
      <Rating
        name="movie-rating"
        value={value}
        onChange={(event: React.ChangeEvent<{}>, newValue: number | null) => {
          newValue && setValue(newValue);
        }}
        precision={0.5}
      />
      <p>Rating: {value}</p>
    </Box>
  );
};

export default RatingStars;
