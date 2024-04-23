import * as React from 'react';
/* ---------------- react-router-imports ---------------- */
import { useNavigation, useNavigate, NavLink } from 'react-router-dom';
/* ------------------ component imports from mui ----------------- */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuthContext } from '../context/AuthContext';
import SearchInput from './UI/SearchInput.jsx';
import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

/* -------------------- Colour Schema -------------------- */
const ColourSchema = {
  pink: '#F2BBD9',
  pastelPink: '#F2B6C1',
  blue: '#9ACDD9',
  green: '#A3D9C5',
  peach: '#A3D9C5',
  mint: '#A3D9C5',
  purpleDark: '#8767BA',
  purple: '#BE9BF3',
  navy: '#183B59',
  beige: '#F2F0EB',
};

/* ---------------- MainNavigation Links ---------------- */
const pages = ['Discover', 'Book Store', 'Offers'];
const settings = ['Account'];

function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { logout } = useAuthContext();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleUserMenuNavigate = (route) => {
    const newRoute = route.toLowerCase();

    if (route === 'Login') {
      return `auth?mode=${newRoute}`;
    } else if (route === 'Account') {
      return `${user?.uid}`;
    } else {
      return newRoute;
    }
  };

  function handleClick(status) {
    if (status === 'logout') logout();
    return;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: ColourSchema.navy,
        color: ColourSchema.beige,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

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
              {' '}
              {/* ------------------ For small screen ------------------ */}
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <NavLink key={index} to="/" end>
                <Button sx={{ color: ColourSchema.beige }}>{page}</Button>
              </NavLink>
            ))}
          </Box>
          <SearchInput />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.displayName}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {/* Link did not work ASK */}
                  <NavLink to={handleUserMenuNavigate(setting)}>
                    {setting}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
            {/*ASK:path action logic did not work <Link
              sx={{
                textDecoration: 'none',
                ml: '1rem',
                color: ColourSchema.purpleDark,
                fontSize: '1.2rem',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                cursor: 'pointer',
              }}
              to="logout"
              onClick={handleNav}
            >
              {user ? 'Logout' : 'Login'}
            </Link> */}
            <NavLink
              to={!user && 'auth?mode=login'}
              onClick={() => handleClick(user ? 'logout' : 'login')}
            >
              <Button sx={{ color: ColourSchema.beige }}>
                {user ? 'Logout' : 'Login'}
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavigation;
