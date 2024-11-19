import axios from "axios";
import { Film } from "../Interfaces/film.interface";
import { FilmStyle, FilmType } from "../Enums/enum";
import { FilterType } from "../Interfaces/filter";

const axiosInstance = axios.create({ baseURL: "http://localhost:3000/films" });

export const createFilm = async (
  name: string,
  style: FilmStyle,
  type: FilmType
): Promise<Film[]> => {
  return axiosInstance.post("/", { name, style, type }).then((res) => res.data);
};

export const getFilms = async (filter: FilterType): Promise<Film[]> => {
  console.log(filter);

  return axiosInstance.post(`/all`, { ...filter }).then((res) => res.data);
};

export const getFilm = async (_id: string): Promise<Film[]> => {
  return axiosInstance.get(`/one/${_id}`).then((res) => res.data);
};

export const updateFilm = async (_id: string, data: Film): Promise<Film[]> => {
  return axiosInstance.patch(`/${_id}`, { ...data }).then((res) => res.data);
};

export const deleteFilm = async (_id: string): Promise<Film[]> => {
  return axiosInstance.delete(`/${_id}`).then((res) => res.data);
};
