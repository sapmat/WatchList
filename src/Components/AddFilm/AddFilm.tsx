import { useState } from "react";
import { films } from "../../data";
import { FilmStyle, FilmType } from "../../Util/Enums/enum";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";

const CustomSelect = styled(Select)(() => ({
  borderRadius: "10px",
  border: "2px solid #4e4e4e",
  width: "10em",
  color: "#999",
  transition: "border 0.2s ease-in-out",
  "&:hover": {
    border: "2px solid #727272",
  },
  "&.Mui-focused": {
    border: "2px solid #ccc",
  },
}));

const AddFilm = ({ rerenerd }: { rerenerd: (n: number) => void }) => {
  const [name, setName] = useState<string>();
  const [style, setStyle] = useState<FilmStyle>();
  const [filmType, setType] = useState<FilmType>();

  const addFilm = () => {
    if (name && style && filmType) {
      // check if film exists already

      films.push({
        _id: films.length.toString(),
        style,
        type: filmType,
        name,
        status: 0,
        matenRating: 0,
        delaRating: 0,
      });

      rerenerd(Math.random());
    }
  };

  return (
    <div className="add-film">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />

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

      <FormControl>
        <InputLabel id="film-type-label">Type</InputLabel>
        <CustomSelect
          labelId="film-type-label"
          value={filmType || ""}
          onChange={(e) => setType(e.target.value as FilmType)}
        >
          {Object.values(FilmType).map((typeName) => (
            <MenuItem key={typeName} value={typeName}>
              {typeName}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>

      <button onClick={addFilm}>Add</button>
    </div>
  );
};

export default AddFilm;
