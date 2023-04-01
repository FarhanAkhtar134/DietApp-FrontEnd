import { Typography, Box } from "@mui/material";

function InlineField(props) {
  console.log("data is ", props.data);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <Typography>{props.text}</Typography>
      </Box>
      <Box>
        <Typography>{props.data}</Typography>
      </Box>
    </Box>
  );
}

export default InlineField;
