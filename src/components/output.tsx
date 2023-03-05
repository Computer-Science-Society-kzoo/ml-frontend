import { Box, Typography } from "@mui/material";
import React from "react";

export const Output = ({
  model,
  result,
  isMobile,
}: {
  model: string;
  result: string;
  isMobile: boolean;
}) => {
  return (
    <Box
      width={isMobile ? "90vw" : "500px"}
      height="200px"
      sx={{
        borderRadius: "10px",
        boxShadow:
          " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        backgroundColor:
          result === "confident"
            ? "#4bff4b"
            : result === "neutral"
            ? "#ffff4b  "
            : "#ff3c3c",
        mb: 5,
      }}
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
