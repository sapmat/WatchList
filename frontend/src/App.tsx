import AddFilm from "./Components/AddFilm/AddFilm";
import FilmTable from "./Components/FilmTable/FilmTable";
import FilterTable from "./Components/Filter/FilterTable";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getFilms } from "./Util/API/apiCall";
import { Film } from "./Util/Interfaces/film.interface";
import { FilterType } from "./Util/Interfaces/filter";
import "./App.css";

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
      <Navbar />
      <AddFilm rerender={rerender} />
      <FilterTable setFilter={setFilter} />
      <FilmTable films={films} />
    </div>
  );
}

export default App;
