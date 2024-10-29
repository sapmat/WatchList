import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Raters, VideoStyle, VideoType } from "../../Util/Enums/enum";
import Status from "../Status/Status";
import Rating from "../Rating/Rating";

const movies = [
  {
    style: VideoStyle.ANIME,
    type: VideoType.SERIES,
    name: "Fullmetal Alchamist: Brotherhood",
    status: 1,
    matenRating: 10,
    delaRating: 0,
  },
];

const MovieTable = () => {
  const avgRating = (r1: number, r2: number): number => (r1 + r2) / 2;

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
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow
                key={movie.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {movie.name}
                </TableCell>
                <TableCell align="right">{movie.style}</TableCell>
                <TableCell align="right">{movie.type}</TableCell>
                <TableCell align="right">
                  <Rating
                    _id="rnd"
                    originalRating={movie.matenRating}
                    rater={Raters.MATEN}
                  />
                </TableCell>
                <TableCell align="right">
                  <Rating
                    _id="rnd"
                    originalRating={movie.delaRating}
                    rater={Raters.DELA}
                  />
                </TableCell>
                <TableCell align="right">
                  {avgRating(movie.matenRating, movie.delaRating)}
                </TableCell>
                <TableCell align="right">
                  {<Status _id="rnd" originStatus={movie.status} />}
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
