import React from "react";
import { Typography, Box, Button, TextField, Slider } from "@mui/material";
import { useForm } from "react-hook-form";
import { dietPlanForm } from "./schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

const minBudget = 1000;

const Index = () => {
  const [value, setValue] = React.useState([1000, 5000]);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(dietPlanForm),
  });

  function valuetext(value) {
    return `$${value}`;
  }
  function saveDietPlanFormData(formData) {
    console.log(formData);
  }

  const handleChange1 = (event, newValue, activeThumb) => {
    console.log("Value is", value);

    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%", marginX: "35%", marginY: 5 }}>
      <form onSubmit={handleSubmit(saveDietPlanFormData)}>
        <Box sx={{ width: "40%", display: "flex", flexDirection: "column" }}>
          <TextField
            {...register("fitnessGoal")}
            error={Boolean(formState.errors.fitnessGoal)}
            helperText={
              Boolean(formState.errors.fitnessGoal) &&
              formState.errors.fitnessGoal.message
            }
            sx={{ marginY: 2 }}
            id="fitnessGoal"
            label="Fitness Goal"
            variant="outlined"
          />
          <TextField
            sx={{ marginY: 2 }}
            {...register("dietaryRequirments")}
            id="dietaryRequirments"
            label="Dietary Requirments"
            variant="outlined"
          />
          <Box sx={{margin:1}}>
            <Typography id="monthly-budget" gutterBottom>
              Monthly Budget
            </Typography>
            <Slider
              getAriaLabel={() => "Budget Range"}
              value={value}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              max = {5000}
              min = {1000}
            />
            <Box>
              <Typography>{`Your Budget Range is ${value[0]} - ${value[1]}`}</Typography>
            </Box>
          </Box>
        </Box>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Index;
