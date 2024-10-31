import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Raters } from "../../Util/Enums/enum";
import Status from "../Status/Status";
import Rating from "../Rating/Rating";
import { useEffect, useState } from "react";
import RemoveFilm from "../RemoveFilm/RemoveFilm";
import { Film } from "../../Util/Interfaces/film.interface";
import EditFilm from "../EditFilm/EditFilm";

const FilmRow = ({
  film,
  render,
  rerender,
}: {
  film: Film;
  render: number;
  rerender: (n: number) => void;
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [filmElem, setFileElem] = useState<JSX.Element>(<></>);
  const avgRating = (r1: number, r2: number): number => (r1 + r2) / 2;

  useEffect(() => {
    setFileElem(
      <TableRow
        key={film.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {film.name}
        </TableCell>
        <TableCell align="right">{film.style}</TableCell>
        <TableCell align="right">{film.type}</TableCell>
        <TableCell align="right">
          <Rating
            _id={film._id}
            originalRating={film.matenRating}
            rater={Raters.MATEN}
            edit={edit}
          />
        </TableCell>
        <TableCell align="right">
          <Rating
            _id={film._id}
            originalRating={film.delaRating}
            rater={Raters.DELA}
            edit={edit}
          />
        </TableCell>
        <TableCell align="right">
          {avgRating(film.matenRating, film.delaRating)}
        </TableCell>
        <TableCell align="right">
          {<Status _id={film._id} originStatus={film.status} />}
        </TableCell>
        <TableCell align="right">
          <EditFilm
            triggerEdit={() => {
              setEdit((prev) => !prev);
            }}
            rerender={rerender}
          />
        </TableCell>
        <TableCell align="right">
          <RemoveFilm _id={film._id} rerender={rerender} />
        </TableCell>
      </TableRow>
    );
  }, [render, edit]);

  return (
    <>{filmElem}</>
  );
};

export default FilmRow;
