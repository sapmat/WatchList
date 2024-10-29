import { TextField } from "@mui/material";
import { Raters } from "../../Util/Enums/enum";
import { ChangeEvent } from "react";

const Rating = ({
  _id,
  originalRating,
  rater,
}: {
  _id: string;
  originalRating: number;
  rater: Raters;
}) => {
  const handleRatingInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rater: Raters
  ) => {
    if ((e.target.value as unknown as number) > 10) {
      e.target.value = "10";
    } else if ((e.target.value as unknown as number) < 0) {
      e.target.value = "0";
    } else {
      if (rater === Raters.MATEN) {
        // API
      } else {
        // API
      }
    }
  };

  return (
    <TextField
      sx={{ width: "6em" }}
      variant="standard"
      type="number"
      defaultValue={originalRating}
      slotProps={{ input: { inputProps: { min: 0, max: 10 } } }}
      onChange={(e) => handleRatingInput(e, rater)}
    />
  );
};

export default Rating;
