import { Typography, Box, List, ListItem } from "@mui/material";
import RecipieItem from "./RecipieItem";

function Recipie(props) {
  if (!props.recipeData) {
    return;
  }

  return (
    <Box>
      <Typography>
        <strong>Recipies:</strong>
      </Typography>
      {props.recipeData.map((recipie, index) => {
        return (
          <>
            <RecipieItem uniqueKey={index} recipie={recipie} />
          </>
        );
      })}
    </Box>
  );
}

export default Recipie;
