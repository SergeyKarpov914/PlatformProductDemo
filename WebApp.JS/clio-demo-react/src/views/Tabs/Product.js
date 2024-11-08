import React from "react";
import { Grid, Box } from "@mui/material";
import Products from "../../views/dashboards/dashboard1-components/Products";

const Product = () => {
  return (
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Products/>
          </Grid>
        </Grid>
      </Box>
  );
};
export default Product;