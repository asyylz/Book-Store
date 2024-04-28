import { Paper, Container, Box, Typography } from '@mui/material';
export default function GuestFooter() {
  return (
    <Paper
      sx={{
        //marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
      }}
      component="footer"
      square
      variant="outlined"
    >
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
