import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { CustomSelect } from "../../Util/Custom/CustomSelect";
import { FilmStyle } from "../../Util/Enums/enum";

const FilmStyleSelect = ({
  style,
  setStyle,
}: {
  style: FilmStyle | undefined;
  setStyle: (f: FilmStyle) => void;
}) => {
  return (
    <FormControl>
      <InputLabel id="film-style-label">Style</InputLabel>
      <CustomSelect
        labelId="film-style-label"
        value={style || ""}
        onChange={(e) => setStyle(e.target.value as FilmStyle)}
      >
        {Object.values(FilmStyle).map((styleName) => (
          <MenuItem key={styleName} value={styleName}>
            {styleName}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default FilmStyleSelect;
