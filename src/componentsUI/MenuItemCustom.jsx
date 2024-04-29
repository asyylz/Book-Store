import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function MenuItemCustom({ menuList, anchor, setAnchor, mode }) {
  //console.log(menuList)
  const handleCloseMenu = () => {
    setAnchor(null);
  };

  return (
    <Menu
      id="menu-appbar"
      sx={{
        mt: mode === 'user' ? '45px' : undefined,
        display: {
          xs: mode === 'nav' ? 'block' : undefined,
          md: mode === 'nav' ? 'none' : undefined,
        },
      }}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: mode === 'nav' ? 'bottom' : 'top',
        horizontal: mode === 'nav' ? 'left' : 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: mode === 'user' ? 'right' : 'left',
      }}
      open={Boolean(anchor)}
      onClose={handleCloseMenu}
    >
      {menuList.map((menu) => (
        <MenuItem key={menu.label} onClick={handleCloseMenu}>
          <NavLink
            to={menu.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography textAlign="center">{menu.label}</Typography>
          </NavLink>
        </MenuItem>
      ))}
    </Menu>
  );
}
