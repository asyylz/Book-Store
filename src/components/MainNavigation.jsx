import * as React from 'react';
/* ---------------- react-router-imports ---------------- */
import { NavLink } from 'react-router-dom';
/* ------------------ component imports from mui ----------------- */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItemCustom from '../components/UI/MenuItemCustom.jsx';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuthContext } from '../context/AuthContext';
import SearchInput from './UI/SearchInput.jsx';
import CartButton from './cart/CartButton.jsx';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext.jsx';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useUserProgressContext } from '../context/UserProgressContext.jsx';
import SelectableAvatar from '../components/SelectableAvatar.jsx';
import { currencyFormatter } from '../utils/currencyFormatter.js';

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
const user = JSON.parse(localStorage.getItem('user'));
const pages = [
  { label: 'Home', path: '/' },
  { label: 'Offers', path: 'offers' },
  { label: 'Categories', path: 'category' },
];
const settings = [{ label: 'Account', path: `${user?.uid}` }];

function MainNavigation() {
  const user = JSON.parse(localStorage.getItem('user'));
  //console.log(user)
  /* ----------------------- context ---------------------- */
  const { logout } = useAuthContext();
  const { items } = useCartContext();
  const { showCart } = useUserProgressContext();

  /* ------------------------ cart ------------------------ */
  console.log(items);
  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const total = items.reduce((totalPrice, item) => {
    return (
      totalPrice +
      (item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 10) *
        item.quantity
    );
  }, 0);

  /* ------------------ navbar functions ------------------ */
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  /* -------------------------- - ------------------------- */

  function handleShowCart() {
    showCart();
  }

  function handleClick(status) {
    if (status === 'logout') logout();
    return;
  }
  /* -------------------------- - ------------------------- */

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: ColourSchema.navy,
        color: ColourSchema.beige,
        fontFamily: 'Oswald',
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
            <MenuItemCustom
              menuList={pages}
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

          {/* -------------- large screen nav sections ------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <NavLink key={index} to={page.path}>
                <Button
                  sx={{ color: ColourSchema.beige, fontFamily: 'Oswald', fontSize:'20px' }}
                >
                  {page.label}
                </Button>
              </NavLink>
            ))}
          </Box>
          <SearchInput />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <SelectableAvatar
                user={user}
                setAnchorElUser={setAnchorElUser}
                anchorElUser={anchorElUser}
              />
            </Tooltip>
            {/* ------------------ user settings menu ----------------- */}
            <MenuItemCustom
              menuList={settings}
              anchor={anchorElUser}
              setAnchor={setAnchorElUser}
              mode="user"
            />
            <NavLink
              to={!user && 'auth?mode=login'}
              onClick={() => handleClick(user ? 'logout' : 'login')}
            >
              <Button
                sx={{
                  color: ColourSchema.beige,
                  '&:hover': {
                    color: '#F29F05',
                  },
                }}
              >
                {user ? 'Logout' : 'Login'}
              </Button>
            </NavLink>
            <CartButton textOnly onClick={handleShowCart}>
              <ShoppingBasketIcon />{' '}
              <small>
                ({totalCartItems})<br></br>
              </small>
              <small style={{ fontSize: '18px' }}>
                Total:{currencyFormatter.format(total)}
              </small>
            </CartButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavigation;
