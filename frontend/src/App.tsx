import "./App.css";
import "./general.css";
import AddFilm from "./Components/AddFilm/AddFilm";
import { useEffect, useState } from "react";
import { getFilms } from "./Util/API/apiCall";
import FilmTable from "./Components/FilmTable/FilmTable";
import FilterTable from "./Components/Filter/FilterTable";
import { Film } from "./Util/Interfaces/film.interface";
import { FilterType } from "./Util/Interfaces/filetr";

function App() {
  const [render, rerender] = useState<number>(0);
  const [filter, setFilter] = useState<FilterType>({});
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    getFilms(filter).then((films: Film[]) => {
      setFilms(films);
    });
  }, [render, filter]);

  return (
    <div className="app">
      <AddFilm rerender={rerender} />
      <FilterTable setFilter={setFilter} />
      <FilmTable films={films} />
    </div>
  );
}

export default App;
