import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Raters } from "../../Util/Enums/enum";
import Status from "../Status/Status";
import Rating from "../Rating/Rating";
import { films } from "../../data";
import { useEffect, useState } from "react";
import RemoveFilm from "../removeFilm/RemoveFilm";

const MovieTable = ({render, rerender} : {render: number, rerender: (n: number) => void}) => {
  const [filmsElems, setFilemElems] = useState<JSX.Element[]>([]);
  const avgRating = (r1: number, r2: number): number => (r1 + r2) / 2;

  useEffect(() => {
    setFilemElems(
      films.map((film) => (
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
            />
          </TableCell>
          <TableCell align="right">
            <Rating
              _id={film._id}
              originalRating={film.delaRating}
              rater={Raters.DELA}
            />
          </TableCell>
          <TableCell align="right">
            {avgRating(film.matenRating, film.delaRating)}
          </TableCell>
          <TableCell align="right">
            {<Status _id={film._id} originStatus={film.status} />}
          </TableCell>
          <TableCell align="right">
            <RemoveFilm _id={film._id} rerenerd={rerender} />
          </TableCell>
        </TableRow>
      ))
    );
  }, [render]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, background: "#ccc" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Style</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Maten's Rating</TableCell>
              <TableCell align="right">Dela's Rating</TableCell>
              <TableCell align="right">Average Rating</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{filmsElems}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MovieTable;
