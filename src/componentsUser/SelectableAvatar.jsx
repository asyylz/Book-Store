import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import MenuItemCustom from '../componentsUI/MenuItemCustom';

export default function SelectableAvatar() {
  const { currentUser } = useAuthContext();
  const settings = [{ label: 'Account', path: `/${currentUser?.uid}` }];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{
          '&:hover': {
            backgroundColor: '#F29F05',
            cursor: 'pointer',
          },
          backgroundColor: anchorElUser ? '#F29F05' : 'transparent',
          mt: '5px',
        }}
      >
        <Avatar
          alt={currentUser.displayName}
          src="/static/images/avatar/2.jpg"
        />
        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {settings.map((menu) => (
            <MenuItem key={menu.label} onClick={handleClose}>
              <NavLink
                to={menu.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography textAlign="center">{menu.label}</Typography>
              </NavLink>
            </MenuItem>
          ))}
        </Menu> */}
        <MenuItemCustom  menuList={settings} mode='user'/>
      </IconButton>
  
  );
}
