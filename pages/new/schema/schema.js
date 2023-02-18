import * as yup from "yup";

export const dietPlanForm = yup.object().shape({
  fitnessGoal: yup
    .string()
    .typeError("Cannot type numbers here")
    .required("Please enter fitness goal"),
  dietaryRequirments: yup.string(),
});
  
