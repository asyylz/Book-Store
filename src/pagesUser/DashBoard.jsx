import { Box, Typography, Divider } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { useRouteLoaderData } from 'react-router-dom';

const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;

export default function DashBoard() {
  const { user } = useRouteLoaderData('user');
  console.log(user);
  return (
    <Box sx={{ m: 3, fontFamily: 'Oswald' }}>
      <Typography sx={{ fontFamily: 'Oswald', fontSize: '20px' }}>
        Your profile information
      </Typography>
      <Divider />
      <Typography sx={{ mt: '20px' }}> Will be here soon</Typography>
    </Box>
  );
}
