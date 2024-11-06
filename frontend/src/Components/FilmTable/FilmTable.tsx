import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import FilmRow from "../MovieRow/MovieRow";
import { Film } from "../../Util/Interfaces/film.interface";

const FilmTable = ({
  films,
}: {
  films: Film[];
}) => {
  const [filmsElems, setFilemElems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setFilemElems(
      films.map((film) => <FilmRow film={film} />)
    );
  }, [films]);

  return (
    <div className="table">
      <TableContainer id="tbl" sx={{ maxWidth: "95vw" }} component={Paper}>
        <Table sx={{ background: "#ccc" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Style</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Maten's Rating</TableCell>
              <TableCell>Dela's Rating</TableCell>
              <TableCell>Average Rating</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflowY: "scroll", maxHeight: "50vh" }}>
            {filmsElems}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilmTable;
