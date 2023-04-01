import { Typography, Box } from "@mui/material";
import Recipie from "./Recipie";

function Meals(props) {
  return (
    <Box>
      <Box>
        <Typography>{props.mealType}</Typography>
      </Box>
      <Box>
        <Recipie recipeData={props.data ? props.data.recipies : null} />
      </Box>
    </Box>
  );
}

export default Meals;
