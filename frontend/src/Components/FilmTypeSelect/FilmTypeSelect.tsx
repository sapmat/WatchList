import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { CustomSelect } from "../../Util/Custom/CustomSelect";
import { FilmType } from "../../Util/Enums/enum";

const FilmTypeSelect = ({
  filmType,
  setType,
  addAny,
}: {
  filmType: FilmType | "Any" | undefined;
  setType: (f: FilmType) => void;
  addAny: boolean;
}) => {
  return (
    <FormControl>
      <InputLabel id="film-style-label">Type</InputLabel>
      <CustomSelect
        labelId="film-style-label"
        value={filmType || (addAny ?? "Any")}
        onChange={(e) => setType(e.target.value as FilmType)}
      >
        {addAny && (
          <MenuItem key={"any"} value={"Any"}>
            Any
          </MenuItem>
        )}
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
