import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import { labels } from "./utils";

interface RatingStarsProps {
  rating: number;
  readOnly?: boolean;
  renderLabelText?: boolean;
  callback?: (value: number) => void;
}

const RatingStars = ({
  rating = 0,
  readOnly = true,
  renderLabelText = false,
  callback,
}: RatingStarsProps) => {
  const [value, setValue] = useState((rating - 1) / 2);
  const [hover, setHover] = useState(-1);

  const handleRenderLabelText = (value: number) => {
    if (renderLabelText) {
      return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }
    return "";
  };

  return (
    <Box>
      <div className="d-flex align-items-center">
        <Rating
          name="movie-rating"
          value={value}
          getLabelText={handleRenderLabelText}
          onChange={(_event: SyntheticEvent, newValue: number | null) => {
            if (newValue) {
              setValue(newValue);
              if (callback) callback(newValue);
            }
          }}
          onChangeActive={(_event: SyntheticEvent, newHover: number) => {
            setHover(newHover);
          }}
          precision={0.5}
          readOnly={readOnly}
        />
        {value !== null && renderLabelText && (
          <span className="ms-3">
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          </span>
        )}
      </div>
    </Box>
  );
};

export default RatingStars;
