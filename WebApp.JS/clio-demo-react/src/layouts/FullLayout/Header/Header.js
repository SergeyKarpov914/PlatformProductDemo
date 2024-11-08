import React from "react";
//import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";


const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  // 5
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const myStyle = {
    backgroundImage: "url(../../../assets/images/backgrounds/NorthwindLogo.svg)",
//    height: "100",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar style={myStyle}>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
