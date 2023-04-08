import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Ingredients = (props) => {
  return (
    <Box key={props.uniqueKey}>
      <Typography>{props.ingredient}</Typography>
    </Box>
  );
};

export default Ingredients;
