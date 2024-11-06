import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { CustomSelect } from "../../Util/Custom/CustomSelect";
import { FilmType } from "../../Util/Enums/enum";

const FilmTypeSelect = ({
  filtType,
  setType,
}: {
    filtType: FilmType | undefined;
    setType: (f: FilmType) => void;
}) => {
  return (
    <FormControl>
      <InputLabel id="film-style-label">Type</InputLabel>
      <CustomSelect
        labelId="film-style-label"
        value={filtType || ""}
        onChange={(e) => setType(e.target.value as FilmType)}
      >
        {Object.values(FilmType).map((styleName) => (
          <MenuItem key={styleName} value={styleName}>
            {styleName}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default FilmTypeSelect;
