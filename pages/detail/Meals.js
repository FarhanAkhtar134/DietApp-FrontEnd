import { Typography, Box, Divider } from "@mui/material";
import Recipie from "./Recipie";

function Meals(props) {
  return (
    <Box>
      <Box>
        <Typography>
          <strong>Meals</strong>
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ my: 2 }}>
          <strong>{props.mealType}:</strong>
        </Typography>
      </Box>
      <Box>
        <Recipie recipeData={props.data ? props.data.recipies : null} />
      </Box>
    </Box>
  );
}

export default Meals;
