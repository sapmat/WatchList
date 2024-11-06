import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFilm } from "../../Util/API/apiCall";

const RemoveFilm = ({ _id }: { _id: string }) => {
  return (
    <button
      className="row-button"
      onClick={(e) => {
        e.currentTarget.closest("tr")!.style.display = "none";
        deleteFilm(_id);
      }}
    >
      <DeleteIcon />
    </button>
  );
};

export default RemoveFilm;
