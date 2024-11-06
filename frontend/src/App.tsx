import "./App.css";
import "./general.css";
import AddFilm from "./Components/AddFilm/AddFilm";
import { useEffect, useState } from "react";
import { getFilms } from "./Util/API/apiCall";
import FilmTable from "./Components/FilmTable/FilmTable";
import FilterTable from "./Components/Filter/FilterTable";
import { Film } from "./Util/Interfaces/film.interface";

function App() {
  const [render, rerenerd] = useState<number>(0);
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    getFilms().then((films: Film[]) => {
      setFilms(films);
    });
  }, [render]);

  return (
    <div className="app">
      <AddFilm rerenerd={rerenerd} />
      <FilterTable />
      <FilmTable films={films} />
    </div>
  );
}

export default App;
