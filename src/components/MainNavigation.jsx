import * as React from 'react';
/* ---------------- react-router-imports ---------------- */
import { NavLink } from 'react-router-dom';
/* ------------------ component imports from mui ----------------- */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItemCustom from '../componentsUI/MenuItemCustom.jsx';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuthContext } from '../context/AuthContext';
import SearchInput from '../componentsUI/SearchInput.jsx';
import CartButton from '../componentsCart/CartButton.jsx';
import { useCartContext } from '../context/CartContext.jsx';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useUserProgressContext } from '../context/UserProgressContext.jsx';
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

// more page section can be added here
const pages = [
  { label: 'Home', path: '/' },
  { label: 'Offers', path: 'offers' },
  { label: 'Categories', path: 'category' },
];

function MainNavigation() {
  /* ----------------------- context ---------------------- */
  const { logout, currentUser } = useAuthContext();
  const { items } = useCartContext();
  const { showCart } = useUserProgressContext();

  const settings = [{ label: 'Account', path: `/${currentUser?.uid}` }];

  /* ------------------------ cart ------------------------ */
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
        minWidth: { xs: '100vw' },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOOK STORE
          </Typography>

          {/* ------------------ small screen nav sections------------------ */}
          <MenuItemCustom menuList={pages} mode="nav" />
          {/* -------------- large screen sections ------------- */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {pages.map((page, index) => (
              <NavLink key={index} to={page.path}>
                <Button
                  sx={{
                    color: ColourSchema.beige,
                    fontFamily: 'Oswald',
                    fontSize: '20px',
                  }}
                >
                  {page.label}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SearchInput />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              textAlign: 'center',
              mb:'10px'
            }}
          >
            <MenuItemCustom menuList={settings} mode="user" />

            <NavLink
              to={!currentUser && 'auth?mode=login'}
              onClick={() => handleClick(currentUser ? 'logout' : 'login')}
            >
              <Button
                sx={{
                  color: ColourSchema.beige,
                  '&:hover': {
                    color: '#F29F05',
                  },
                }}
              >
                {currentUser ? 'Logout' : 'Login'}
              </Button>
            </NavLink>
            <CartButton textOnly onClick={handleShowCart}>
              <ShoppingBasketIcon />
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
