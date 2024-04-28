import { Grid3x3Outlined } from '@mui/icons-material';
import { Grid3x3 } from '@mui/icons-material';
import { Paper, Container, Box, Typography, Grid } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function GuestFooter() {
  return (
    <Paper
      sx={{
        //marginTop: 'calc(10% + 60px)',
        minWidth: '99%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        m: 'auto',
        //border:'1px solid red'
        display: 'flex',
        flexDirection: 'column',
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Grid
        container
        sx={{
          backgroundColor: '#D9D2D0',
          m: '1rem',
          p: '1rem',
          overflow: 'hidden',
          //border:'1px solid red',
          width: '99%',
        }}
      >
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Oswald',
              lineHeight: '12px',
              textDecoration: 'underLine',
            }}
          >
            SHOPPING WITH US
            <p>Contact Us</p>
            <p>Bookshops</p>
            <p>Click & Colect</p>
            <p>Delivery Options</p>
            <p>Returning Items</p>
            <p>Gift Cards</p>
            <p>Student Discount</p>
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <Typography
            sx={{ fontFamily: 'Oswald', textDecoration: 'underLine' }}
          >
            ABOUT US
            <p>About</p>
            <p>App</p>
            <p>Careers</p>
            <p>Independent Publishers</p>
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Oswald',
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
            <Box display="flex" flexDirection="column" alignItems="start">
              <Box display="flex" alignItems="center">
                <XIcon sx={{ mr: '10px' }} />
                <small>X</small>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon sx={{ mr: '10px' }} />
                <span>Facebook</span>
              </Box>
              <Box display="flex" alignItems="center">
                <YouTubeIcon sx={{ mr: '10px' }} />
                <span>YouTube</span>
              </Box>
              <Box display="flex" alignItems="center">
                <InstagramIcon sx={{ mr: '10px' }} />
                <span>Instagram</span>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
          m: 2,
        }}
      >
        <Typography
          sx={{ fontFamily: 'Oswald', fontSize: 18 }}
          variant="caption"
          color="initial"
        >
          Copyright ©2024 Asiye Yaliz
        </Typography>
      </Box>
    </Paper>
  );
}
