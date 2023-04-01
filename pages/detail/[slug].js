import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import InlineField from "./InlineField";
import Meals from "./Meals";

const PlanDetails = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const { slug } = router.query;

  useEffect(() => {
    const fetchDetailData = async () => {
      const url = new URL(`http://localhost:8081/detail/${slug}`);

      try {
        const response = await fetch(url.href);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
        return;
      }
    };
    fetchDetailData();
  }, [slug]);

  console.log("data is ", data);
  if (!data) {
    return (
      <Box>
        <Typography>Error fetching Data</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Box sx={{ m: 5 }}>
        <Typography variant="h5">Diet Plan Detail</Typography>
      </Box>
      <Box>
        <InlineField
          text="Fitness Goal:"
          data={data.fitnessGoal ? data.fitnessGoal : null}
        />
      </Box>
      <Box>
        <InlineField
          text="Dietary Requirments:"
          data={data.dietaryRequirment}
        />
      </Box>
      <Box>
        <InlineField text="Monthy Budget:" data={data.monthlyBudget} />
      </Box>
      <Box>
        <Meals
          mealType="BreakFast"
          data={data.meal ? data.meal.breakfast : null}
        />
      </Box>
    </Box>
  );
};

export default PlanDetails;
