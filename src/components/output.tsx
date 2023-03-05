import { Box, Typography } from "@mui/material";
import React from "react";

export const Output = ({
  model,
  result,
}: {
  model: string;
  result: string;
}) => {
  return (
    <Box
      width="400px"
      height="200px"
      sx={{ background: "lightgrey", borderRadius: "10px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Typography variant="h5" fontWeight={800}>
        {model}
      </Typography>
      <Typography variant="h6">Result: {result}</Typography>
    </Box>
  );
};
