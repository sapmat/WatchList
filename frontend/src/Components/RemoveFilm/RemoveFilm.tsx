import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFilm } from "../../Util/API/apiCall";

const RemoveFilm = ({
  _id,
  rerender,
}: {
  _id: string;
  rerender: (n: number) => void;
}) => {
  const removeFilm = () => {
    deleteFilm(_id);
    rerender(Math.random());
  };

  return (
    <button className="row-button" onClick={removeFilm}>
      <DeleteIcon />
    </button>
  );
};

export default RemoveFilm;
