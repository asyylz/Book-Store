import { Container, Box, Typography, Grid } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import * as React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useAuthContext } from '../context/AuthContext';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/asyylz">
        Asiye Yaliz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const listShoppingWithUs = [
  'Contact Us',
  'Bookshops',
  'Click & Collect',
  'Delivery Options',
  'Online Pricing',
  'Returning Items',
  'Student Discount',
  'Gift Cards',
];

const listAboutUs = ['About', 'App', 'Careers', 'Independent Publishers'];

function CustomList(list) {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {list.map((item, index) => (
        <ListItem
          component={Link}
          key={index}
          href=""
          sx={{
            lineHeight: { xs: '18px', sm: '18px' },
            fontFamily: 'Oswald',
            fontSize: { xs: '14px', sm: '18px' },
          }}
        >
          <Link
            sx={{
              color: 'black',
              textDecoration: 'none',
              '&:hover': { color: 'grey' },
            }}
          >
            {item}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default function Footer() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1201,
        bottom: 0,
        marginTop: '10vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: { xs: '0', sm: '2' },
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            sx={{
              backgroundColor: '#D9D2D0',
              p: '1rem',
            }}
          >
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: 'Oswald',
                  fontSize: { xs: '14px', sm: '18px' },
                  lineHeight: { xs: '18px', sm: '12px' },
                  textDecoration: 'underLine',
                }}
              >
                SHOPPING WITH US
              </Typography>
              {CustomList(listShoppingWithUs)}
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: 'Oswald',
                  fontSize: { xs: '14px', sm: '18px' },
                  lineHeight: { xs: '18px', sm: '12px' },
                  textDecoration: 'underLine',
                }}
              >
                ABOUT US
                {CustomList(listAboutUs)}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Oswald',
                  fontSize: { xs: '14px', sm: '18px' },
                  lineHeight: { xs: '18px', sm: '12px' },
                  textDecoration: 'underLine',
                }}
              >
                FOLLOW US
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: '.3rem',
                  //border: '1px solid red',
                }}
              >
                <List display="flex" flexDirection="column" alignItems="start">
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'grey' },
                      cursor: 'pointer',
                    }}
                  >
                    <XIcon sx={{ mr: '10px' }} />
                    <small>X</small>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'grey' },
                      cursor: 'pointer',
                    }}
                  >
                    <FacebookIcon sx={{ mr: '10px' }} />
                    <span>Facebook</span>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'grey' },
                      cursor: 'pointer',
                    }}
                  >
                    <YouTubeIcon sx={{ mr: '10px' }} />
                    <span>YouTube</span>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { color: 'grey' },
                      cursor: 'pointer',
                    }}
                  >
                    <InstagramIcon sx={{ mr: '10px' }} />
                    <span>Instagram</span>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
