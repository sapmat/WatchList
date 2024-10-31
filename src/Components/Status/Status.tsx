import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Status = ({
  _id,
  originStatus,
}: {
  _id: string;
  originStatus: number;
}) => {
  const statusAsText = (status: number): string =>
    status === -1 ? "To watched" : status === 0 ? "Watching" : "Watched";

  const [status, setStatus] = useState<number>(originStatus);

  const handleChange = (event: SelectChangeEvent) => {
    // API CALL
    setStatus(event.target.value as unknown as number);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select value={status.toString()} onChange={handleChange}>
          <MenuItem value={-1}>{statusAsText(-1)}</MenuItem>
          <MenuItem value={0}>{statusAsText(0)}</MenuItem>
          <MenuItem value={1}>{statusAsText(1)}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Status;
