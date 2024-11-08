import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import { useState, useEffect } from 'react';
import { DealFullGrid } from "../../../grids/DealFullGrid";

const deal = (selectedRow) => {
  if(selectedRow !== undefined)  {
    DealFullGrid(selectedRow);
  }
};

const OrderFullDeals = (props) => {

  useEffect(() => deal(props.selectedRow), []);

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          paddingTop: "2px !important",
          paddingBottom: "2px !important",
          paddingLeft: "2px !important",
          paddingRight: "2px !important",
        }}
      >
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginTop: "0",
                marginBottom: "0",
              }}
              gutterBottom
            >
              Order Deal Structure
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "5px",
            marginBottom: "5px",
            overflow: "auto",
            mt: 3,
          }}
        >
        {/* --------------------------- */}
            <DealFullGrid selectedRow={props.selectedRow}/>
        {/* --------------------------- */}
        </Box>
      </CardContent>
    </Card>
  );
};
export default OrderFullDeals;
