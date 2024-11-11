import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { CustomSelect } from "../../Util/Custom/CustomSelect";
import { FilmStyle } from "../../Util/Enums/enum";

const FilmStyleSelect = ({
  style,
  setStyle,
  addAny,
}: {
  style: FilmStyle | "Any" | undefined;
  setStyle: (f: FilmStyle) => void;
  addAny: boolean;
}) => {
  return (
    <FormControl>
      <InputLabel id="film-style-label">Style</InputLabel>
      <CustomSelect
        labelId="film-style-label"
        value={style || (addAny ?? "Any")}
        onChange={(e) => setStyle(e.target.value as FilmStyle)}
      >
        {addAny && (
          <MenuItem key={"any"} value={"Any"}>
            Any
          </MenuItem>
        )}
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
