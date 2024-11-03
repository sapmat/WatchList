import styled from "@emotion/styled";
import { Select } from "@mui/material";

export const CustomSelect = styled(Select)(() => ({
    borderRadius: "10px",
    border: "2px solid #4e4e4e",
    width: "10em",
    color: "#999",
    transition: "border 0.2s ease-in-out",
    "&:hover": {
      border: "2px solid #727272",
    },
    "&.Mui-focused": {
      border: "2px solid #ccc",
    },
  }));