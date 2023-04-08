import { Typography, Box } from "@mui/material";
import Ingredients from "./Ingredients";

const RecipieItem = (props) => {
  return (
    <Box key={props.uniqueKey}>
      <Typography>{props.recipie.name}</Typography>
      {props.recipie.ingredients.map((ingredient, index) => {
        return (
          <>
            <Ingredients uniqueKey={index} ingredient={ingredient} />
          </>
        );
      })}
    </Box>
  );
};

export default RecipieItem;
