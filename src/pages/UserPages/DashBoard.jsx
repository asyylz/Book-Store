import {
  Box,
  Button,
  Typography,
  Grid,
  Divider,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get, onValue } from 'firebase/database';

const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;

export default function DashBoard() {
  //const { fetchUser } = useUserProfileContext();
  const { user } = useLoaderData();
  //console.log(user);
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

export async function loaderUser({ _, params }) {
  const userId = params.userId;
  console.log(params.userId);
  const db = getDatabase();
  //const userRef = ref(db, 'users/-Nw6WlG9znx7xHQ1H1gF/user/providerData');
  const userRef = ref(db, `users/${userId}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      //console.log(snapshot.val());
      const user = snapshot.val();
      return { user };
    } else {
      console.log('No data available');
      return {};
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
}
