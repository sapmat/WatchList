import { useState } from "react";
import { films } from "../../data";
import { FilmStyle, FilmType, WatchStatus } from "../../Util/Enums/enum";
import { TextField } from "@mui/material";
import FilmStyleSelect from "../FilmStyleSelect/FimeStyleSelect";
import FilmTypeSelect from "../FilmTypeSelect/FilmTypeSelect";

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
        status: WatchStatus.TO_WATCH,
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

      <FilmStyleSelect style={style} setStyle={setStyle} />
      <FilmTypeSelect filtType={filmType} setType={setType} />

      <button onClick={addFilm}>Add</button>
    </div>
  );
};

export default AddFilm;
