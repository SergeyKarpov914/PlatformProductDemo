import React from "react";
import { Grid, Box } from "@mui/material";
import Employees from "../../views/dashboards/dashboard1-components/Employees";

const Employee = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Employees/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default Employee;