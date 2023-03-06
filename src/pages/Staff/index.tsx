import React from "react";
import StaffList from "./StaffList";
import { Box, Button } from "@mui/material";
import NewStaff from "./NewStaff";

const Staff = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <NewStaff />
      <StaffList />
    </Box>
  );
};

export default Staff;
