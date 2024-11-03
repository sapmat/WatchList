import EditIcon from "@mui/icons-material/Edit";

const EditFilm = ({
  triggerEdit,
  rerender,
}: {
  triggerEdit: () => void;
  rerender: (n: number) => void;
}) => {
  return (
    <button
      id="remove-line"
      onClick={() => {
        triggerEdit();
        rerender(Math.random());
      }}
    >
      <EditIcon />
    </button>
  );
};

export default EditFilm;
