import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, useEffect, useState } from "react";
import RemoveFilm from "../RemoveFilm/RemoveFilm";
import { Film } from "../../Util/Interfaces/film.interface";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { FilmStyle, FilmType, WatchStatus } from "../../Util/Enums/enum";
import { updateFilm } from "../../Util/API/apiCall";

const FilmRow = ({
  film,
  rerender,
}: {
  film: Film;
  render: number;
  rerender: (n: number) => void;
}) => {
  const [name, setName] = useState<string>(film.name);
  const [style, setStyle] = useState<FilmStyle>(film.style);
  const [filmType, setType] = useState<FilmType>(film.type);
  const [matenRating, setMatenRating] = useState<number>(film.matenRating);
  const [delaRating, setDelaRating] = useState<number>(film.delaRating);
  const [averageRating, setAverageRating] = useState<number>(
    film.averageRating
  );
  const [status, setStatus] = useState<WatchStatus>(film.status);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    setAverageRating((matenRating + delaRating) / 2);
  }, [matenRating, delaRating]);

  const handelUpdate = async () => {
    const newFilm: Film = {
      _id: film._id,
      name,
      style,
      type: filmType,
      matenRating,
      delaRating,
      averageRating,
      status,
    };

    return updateFilm(film._id, newFilm);
  };

  const handleRatingInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    f: (n: number) => void
  ) => {
    if ((e.target.value as unknown as number) > 10) {
      e.target.value = "10";
    } else if ((e.target.value as unknown as number) < 0) {
      e.target.value = "0";
    } else {
      f(Number(e.target.value));
    }
  };

  return (
    <TableRow
      key={name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <TextField
          className={edit ? "" : "edit"}
          sx={{ width: "20em" }}
          variant="standard"
          type="text"
          defaultValue={name}
          disabled={!edit}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
      </TableCell>

      <TableCell>
        {edit ? (
          <Box sx={{ minWidth: "6em" }}>
            <FormControl fullWidth>
              <Select
                defaultValue={style}
                onChange={(e) => setStyle(e.target.value as FilmStyle)}
              >
                <MenuItem value={FilmStyle.ANIME}>{FilmStyle.ANIME}</MenuItem>
                <MenuItem value={FilmStyle.CARTOON}>
                  {FilmStyle.CARTOON}
                </MenuItem>
                <MenuItem value={FilmStyle.LIVE_ACTION}>
                  {FilmStyle.LIVE_ACTION}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        ) : (
          style
        )}
      </TableCell>

      <TableCell>
        {edit ? (
          <Box sx={{ minWidth: "6em" }}>
            <FormControl fullWidth>
              <Select
                defaultValue={filmType}
                onChange={(e) => setType(e.target.value as FilmType)}
              >
                <MenuItem value={FilmType.MOVIE}>{FilmType.MOVIE}</MenuItem>
                <MenuItem value={FilmType.SERIES}>{FilmType.SERIES}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ) : (
          filmType
        )}
      </TableCell>

      <TableCell>
        <TextField
          className={edit ? "" : "edit"}
          sx={{ width: "6em" }}
          variant="standard"
          type="number"
          defaultValue={matenRating}
          slotProps={{ input: { inputProps: { min: 0, max: 10 } } }}
          onChange={(e) => handleRatingInput(e, setMatenRating)}
          disabled={!edit}
        />
      </TableCell>

      <TableCell>
        <TextField
          className={edit ? "" : "edit"}
          sx={{ width: "6em" }}
          variant="standard"
          type="number"
          defaultValue={delaRating}
          slotProps={{ input: { inputProps: { min: 0, max: 10 } } }}
          onChange={(e) => handleRatingInput(e, setDelaRating)}
          disabled={!edit}
        />
      </TableCell>

      <TableCell>{averageRating}</TableCell>

      <TableCell>
        <Box sx={{ minWidth: "7em" }}>
          <FormControl fullWidth>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value as WatchStatus)}
            >
              <MenuItem value={WatchStatus.TO_WATCH}>
                {WatchStatus.TO_WATCH}
              </MenuItem>
              <MenuItem value={WatchStatus.WATCHING}>
                {WatchStatus.WATCHING}
              </MenuItem>
              <MenuItem value={WatchStatus.WATCHED}>
                {WatchStatus.WATCHED}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </TableCell>

      <TableCell>
        {edit ? (
          <button
            className="row-button"
            onClick={() => {
              handelUpdate();
              setEdit((prev) => !prev);
              rerender(Math.random());
            }}
          >
            <SaveIcon />
          </button>
        ) : (
          <button
            className="row-button"
            onClick={() => {
              setEdit((prev) => !prev);
              rerender(Math.random());
            }}
          >
            <EditIcon />
          </button>
        )}
      </TableCell>

      <TableCell>
        <RemoveFilm _id={film._id} rerender={rerender} />
      </TableCell>
    </TableRow>
  );
};

export default FilmRow;
