import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";

const PlanDetails = () => {
  const router = useRouter();
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

  return (
    <Box>
      <Box sx={{m:5}}>
        <Typography variant='h5'>Diet Plan Detail</Typography>
      </Box>
    </Box>
  );
};

export default PlanDetails;
