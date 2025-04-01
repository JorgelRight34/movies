import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import StarIcon from "@mui/icons-material/Star"; // Star Icon
import { labels } from "./utils";
import { styled } from "@mui/material";

interface RatingStarsProps {
  rating: number;
  readOnly?: boolean;
  renderLabelText?: boolean;
  callback?: (value: number) => void;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "yellow",
    opacity: 1,
  },
  "& .MuiRating-iconHover": {
    color: "yellow",
    opacity: 1,
  },
  "& .MuiRating-iconEmpty": {
    color: "white", // Color for empty stars
    opacity: 1,
  },
});

/**
 * A rating starts component.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {number} rating - Number that represents the rating
 * @param {ReactNode} [readOnly=true] - True if not submitting a rating required
 * @returns {JSX.Element} The rendered rating stars component.
 */
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
        <StyledRating
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
          icon={<StarIcon fontSize="large" />}
          emptyIcon={<StarIcon fontSize="large" />}
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
