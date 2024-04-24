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
import MenuItemCustom from './UI/MenuItemCustom.jsx';
import MenuItemDeneme from './UI/MenuItemdeneme.jsx';

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

const bookCategories = [
  { label: 'Fiction', path: '/category/fiction' },
  { label: 'Non-Fiction', path: '/category/non-fiction' },
  { label: 'Science', path: '/category/science' },
  { label: 'History', path: '/category/history' },
  { label: 'Biography', path: '/category/biography' },
  { label: 'Fantasy', path: '/category/fantasy' },
  { label: 'Mystery', path: '/category/mystery' },
  { label: 'Romance', path: '/category/romance' },
  { label: "Children's Books", path: '/category/childrens-books' },
  { label: 'Young Adult', path: '/category/young-adult' },
];

/* ---------------- MainNavigation Links ---------------- */
const pages = ['Home', 'Offers', 'Categories'];
const settings = [{ label: 'Account' }];

function MainNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const { logout } = useAuthContext();

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log('yol', route);
  // const newRoute = route.toLowerCase();
  // if (route === 'Login') {
  //   return `auth?mode=${newRoute}`;
  // } else if (route === 'Account') {
  //   return `${user?.uid}`;
  // } else if (route === 'Home') {
  //   console.log('this is home');
  //   return;
  // } else {
  //   return newRoute;
  // }

  function handleClick(status) {
    if (status === 'logout') logout();
    return;
  }

  const handleUserMenuNavigate = (page) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const pageToPathMapping = {
      Home: '/',
      Categories: '/categories',
      Offers: '/offers',
      Account: `${user?.uid}`,
    };
    return pageToPathMapping[page] || '/';
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

          {/* ------------------ small screen nav sections------------------ */}
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
            <MenuItemDeneme
              menuList={bookCategories}
              anchor={anchorElNav}
              setAnchor={setAnchorElNav}
              mode="nav"
            />
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
              <NavLink key={index} to={handleUserMenuNavigate(page)}>
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
            /* ------------------ user setting menu ----------------- */
            <MenuItemDeneme
              menuList={settings}
              anchor={anchorElUser}
              setAnchor={setAnchorElUser}
              mode="user"
            />
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
