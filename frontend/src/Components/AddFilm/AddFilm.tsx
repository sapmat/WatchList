import FilmStyleSelect from "../FilmStyleSelect/FimeStyleSelect";
import FilmTypeSelect from "../FilmTypeSelect/FilmTypeSelect";
import { useState } from "react";
import { FilmStyle, FilmType } from "../../Util/Enums/enum";
import { TextField } from "@mui/material";
import { createFilm } from "../../Util/API/apiCall";
import "./AddFilm.css"

const AddFilm = ({ rerender }: { rerender: (n: number) => void }) => {
  const [name, setName] = useState<string>();
  const [style, setStyle] = useState<FilmStyle>();
  const [filmType, setType] = useState<FilmType>();

  const addFilm = () => {
    if (name && style && filmType) {
      createFilm(name, style, filmType);
      rerender(Math.random());
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

      <FilmStyleSelect style={style} setStyle={setStyle} addAny={false} />
      <FilmTypeSelect filmType={filmType} setType={setType} addAny={false} />

      <button onClick={addFilm}>Add</button>
    </div>
  );
};

export default AddFilm;
