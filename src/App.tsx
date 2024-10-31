import "./App.css";
import "./general.css";
import AddFilm from "./Components/AddFilm/AddFilm";
import { useState } from "react";
import FilmTable from "./Components/FilmTable/FilmTable";

function App() {
  const [render, rerenerd] = useState<number>(0);

  return (
    <div className="app">
      <AddFilm rerenerd={rerenerd} />
      <FilmTable render={render} rerender={rerenerd} />
    </div>
  );
}

export default App;
