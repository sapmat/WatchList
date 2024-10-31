import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { films } from "../../data";
import { useEffect, useState } from "react";
import FilmRow from "../MovieRow/MovieRow";

const FilmTable = ({
  render,
  rerender,
}: {
  render: number;
  rerender: (n: number) => void;
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [filmsElems, setFilemElems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setFilemElems(
      films.map((film) => (
        <FilmRow film={film} render={render} rerender={rerender} />
      ))
    );
  }, [render, edit]);

  return (
    <div className="table">
      <button onClick={() => setEdit((prev) => !prev)}>
        {edit.toString()}
      </button>
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
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{filmsElems}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilmTable;
