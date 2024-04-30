import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Typography, Box, Avatar } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '../context/AuthContext';

export default function MenuItemCustom({ menuList, mode }) {
  const { currentUser } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: mode === 'nav' && 'flex', md: mode === 'nav' && 'none' },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          ...(mode === 'user' && {
            '&:hover': {
              backgroundColor: '#F29F05',
              cursor: 'pointer',
            },
            mt: '5px',
          }),
        }}
      >
        {mode === 'user' ? (
          <Avatar
            alt={currentUser.displayName}
            src="/static/images/avatar/2.jpg"
          />
        ) : (
          <MenuIcon />
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{
          mt: mode === 'user' ? '45px' : undefined,
          display: {
            xs: mode === 'nav' ? 'block' : undefined,
            md: mode === 'nav' ? 'none' : undefined,
          },
        }}
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: mode === 'nav' ? 'bottom' : 'top',
          horizontal: mode === 'nav' ? 'left' : 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: mode === 'user' ? 'right' : 'left',
        }}
        open={Boolean(anchorElNav)}
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
    </Box>
  );
}
