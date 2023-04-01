import { Typography, Box } from "@mui/material";

function Recipie(props) {
  if (!props.recipeData) {
    return;
  }

  return (
    <Box>
      <Typography>Recipies</Typography>
      {props.recipeData.map((recipie) => {
        return (
          <>
            <Typography>{recipie.name}</Typography>
          </>
        );
      })}
    </Box>
  );
}

export default Recipie;
