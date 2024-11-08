import React from "react";
import { Grid, Box } from "@mui/material";
import Suppliers from "../../views/dashboards/dashboard1-components/Suppliers";

const Supplier = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Suppliers/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default Supplier;