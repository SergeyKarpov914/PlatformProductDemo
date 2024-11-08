import React from "react";
import { Grid, Box } from "@mui/material";
import Customers from "../../views/dashboards/dashboard1-components/Customers";

const Customer = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Customers/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default Customer;
