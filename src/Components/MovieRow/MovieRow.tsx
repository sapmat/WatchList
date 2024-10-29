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
import AddFilm from "../AddFilm/AddFilm";

const MovieTable = () => {
  const avgRating = (r1: number, r2: number): number => (r1 + r2) / 2;

  return (
    <div>
      <AddFilm />
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
            </TableRow>
          </TableHead>
          <TableBody>
            {films.map((film) => (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MovieTable;
