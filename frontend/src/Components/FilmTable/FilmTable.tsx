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
import { getFilms } from "../../Util/API/apiCall";

const FilmTable = ({
  render,
  rerender,
}: {
  render: number;
  rerender: (n: number) => void;
}) => {
  const [filmsElems, setFilemElems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    getFilms().then((films: Film[]) => {
      console.log(films);
      
      setFilemElems(
        films.map((film) => (
          <FilmRow film={film} render={render} rerender={rerender} />
        ))
      );
    });
  }, [render]);

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, background: "#ccc" }}
          aria-label="simple table"
        >
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
          <TableBody>{filmsElems}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilmTable;
