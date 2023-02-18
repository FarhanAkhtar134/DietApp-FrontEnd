import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const Home = () => {
  //data and fetching state
  const router = useRouter()
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL(
         "http://localhost:8081/diet/list"
      );
     
      try {
        const response = await fetch(url.href);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
  }, []);



  const columns = [
    { field: "fitnessGoal", headerName: "Fitness Goal", width: 200 },
    { field: "monthlyBudget", headerName: "Monthly Budget", width: 200 },
    { field: "dietaryRequirment", headerName: "Dietary Requirment", width: 200 },
    
  ];



function onCreatePlanButtonCLickHandler () {
  router.push('/new')

}



  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width:'70%', margin:4, alignItems:'center' }}>
        <Typography
          sx={{ marginY: 4, width: "90%", marginLeft: 10 }}
          variant="h4"
        >
          List of Diet Plans
        </Typography>

        <Box>

        <Button onClick={onCreatePlanButtonCLickHandler} size="medium" variant="contained">
          Create new Diet Plan
        </Button>
        </Box>
      </Box>

      <div style={{ height: 400, width: "90%", margin: "auto" }}>
        <DataGrid
          rows={data}
          getRowId={(row) => row.id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
};

export default Home;





