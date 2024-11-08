import React from "react";
import { Grid, Box } from "@mui/material";

import {useState } from 'react';

import {
  OrderSummary,
  OrderFullDeals,
} from ".";

const Orders = () => {

  const [selectedRow, setSelectedRow] = useState();

  return (
      <Box>
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={12}>
            <OrderSummary setSelectedRow={setSelectedRow}/>
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid item xs={12} lg={12}>
            <OrderFullDeals selectedRow={selectedRow}/>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Orders;
