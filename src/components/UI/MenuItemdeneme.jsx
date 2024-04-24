import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
export default function MenuItemDeneme({
  menuList,
  anchorElNav,
  setAnchorElNav,
}) {
  console.log(menuList);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {/* {menuList.map((menu, index) => (
        <MenuItem key={index} onClick={handleCloseNavMenu}>
          <NavLink textAlign="center">{menu.label}</NavLink>
        </MenuItem>
      ))} */}
      {menuList.map((menu) => (
        <MenuItem key={menu.label} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{menu.label}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
