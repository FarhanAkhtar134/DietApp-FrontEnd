import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const Home = () => {
  //data and fetching state
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



  return (
    <>
    <Typography sx={{marginY:4, width:"90%", marginLeft: 10}} variant="h4">List of Diet Plans</Typography>
    <div style={{ height: 400, width: "90%", margin:'auto' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </>
  );
};

export default Home;
