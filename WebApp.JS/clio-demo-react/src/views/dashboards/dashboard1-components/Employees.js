import React from "react";

import EmployeeGrid from "../../../grids/EmployeeGrid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Employees = () => {
   return (
    <Card
        variant="outlined"
        sx={{
          paddingBottom: "0",
        }}
    >
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
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginTop: "5",
                marginBottom: "0",
              }}
              gutterBottom
            >
              Northwind Trading Company Employees
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
        {/* --------------------------- */}
            <EmployeeGrid/>
        {/* --------------------------- */}
        </Box>
      </CardContent>
    </Card>
  );
};
export default Employees;
