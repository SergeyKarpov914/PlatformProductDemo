import React from "react";
import { Grid, Box } from "@mui/material";

import {useState } from 'react';

import {
  OrderSummary,
  OrderDeals,
  ClientAnalytics,
} from "./dashboard1-components";

const Dashboard1 = () => {

  const [selectedRow, setSelectedRow] = useState();

  return (
      <Box>
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={0} lg={12}>
            <OrderSummary setSelectedRow={setSelectedRow}/>
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid item xs={0} lg={4}>
            <ClientAnalytics />
          </Grid>
          <Grid item xs={0} lg={8}>
            <OrderDeals selectedRow={selectedRow}/>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Dashboard1;
