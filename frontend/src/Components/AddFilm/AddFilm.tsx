import { useState } from "react";
import { FilmStyle, FilmType } from "../../Util/Enums/enum";
import { TextField } from "@mui/material";
import FilmStyleSelect from "../FilmStyleSelect/FimeStyleSelect";
import FilmTypeSelect from "../FilmTypeSelect/FilmTypeSelect";
import { createFilm } from "../../Util/API/apiCall";

const AddFilm = ({ rerenerd }: { rerenerd: (n: number) => void }) => {
  const [name, setName] = useState<string>();
  const [style, setStyle] = useState<FilmStyle>();
  const [filmType, setType] = useState<FilmType>();

  const addFilm = () => {
    if (name && style && filmType) {
      createFilm(name, style, filmType);
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

      <FilmStyleSelect style={style} setStyle={setStyle} />
      <FilmTypeSelect filtType={filmType} setType={setType} />

      <button onClick={addFilm}>Add</button>
    </div>
  );
};

export default AddFilm;
