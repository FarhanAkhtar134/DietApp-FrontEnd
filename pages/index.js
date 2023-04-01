import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

import MaterialReactTable from "material-react-table";


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


  const columns = useMemo(
    () => [
      {
        accessorKey: "fitnessGoal", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        header: "FitnessGoal",
        size: 300,
      },
      {
        accessorKey: "monthlyBudget", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        header: "Monthly Budget",
        size: 300,
      },
      {
        accessorKey: "dietaryRequirment", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        enableClickToCopy: true,
        header: "Dietary Requirments",
        size: 300,
      },
    ],
    []
  );


function onRowClickHandler(rowId) {
  router.push(`/detail/${rowId}`)
}

function onCreatePlanButtonCLickHandler () {
  router.push('/new')

}


console.log('diet plant id is ', data)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          margin: 4,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ marginY: 4, width: "90%", marginLeft: 10 }}
          variant="h4"
        >
          List of Diet Plans
        </Typography>

        <Box>
          <Button
            onClick={onCreatePlanButtonCLickHandler}
            size="medium"
            variant="contained"
          >
            Create new Diet Plan
          </Button>
        </Box>
      </Box>

      <Box>
        <MaterialReactTable
          columns={columns}
          data={data}
          getRowId={(row) => row.dietPlanId}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => {
              onRowClickHandler(row.id)
            },
            sx: {
              cursor: "pointer",
            },
          })}
          initialState={{ showColumnFilters: true, showGlobalFilter: true }}
          enableGlobalFilter={true}
          enableColumnFilters={true}
          enablePagination={true}
          enableSorting={true}
          enableBottomToolbar={true}
          enableTopToolbar={true}
        />
      </Box>
    </>
  );
};

export default Home;





