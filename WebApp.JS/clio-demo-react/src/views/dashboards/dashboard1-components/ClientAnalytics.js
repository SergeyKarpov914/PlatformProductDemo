import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import construction from "../../../assets/images/localconstruction.jpg";

const ClientAnalytics = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  return (
    <Card
      variant="outlined"
      sx={{
        paddingTop: "2px !important",
        paddingBottom: "2px !important",
        paddingLeft: "2px !important",
        paddingRight: "2px !important",
      }}    
    >
      <CardContent
        sx={{
          pb: "0 !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "h3.fontSize",
                marginBottom: "0",
              }}
              gutterBottom
            >
              Sales by Customer
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
                sx={{
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
              Placeholder for chart
            </Typography>
          </Box>
        </Box>
        <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 5,
              marginBottom: "1px",
            }}
        >
            <Typography
                    color="textSecondary"
                    variant="body1"
                    sx={{
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
              <img alt="Logo" src={construction} />
             </Typography>
          </Box>
      </CardContent>
    </Card>
  );
};

export default ClientAnalytics;
