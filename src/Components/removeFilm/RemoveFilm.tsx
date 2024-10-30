import DeleteIcon from "@mui/icons-material/Delete";
import { films } from "../../data";

const RemoveFilm = ({
  _id,
  rerenerd,
}: {
  _id: string;
  rerenerd: (n: number) => void;
}) => {
  const removeFilm = () => {
    const indexToRemove = films.findIndex((film) => film._id === _id);

    if (indexToRemove !== -1) {
      films.splice(indexToRemove, 1);
    }

    rerenerd(Math.random());
  };

  return (
    <button id="remove-line" onClick={removeFilm}>
      <DeleteIcon />
    </button>
  );
};

export default RemoveFilm;
