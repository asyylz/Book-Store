import { Box, Button, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get, onValue } from 'firebase/database';

const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;

export default function DashBoard() {
  //const { fetchUser } = useUserProfileContext();
  const { user } = useLoaderData();
  //console.log(user);
  return (
    <Box>
      <Typography>{user?.username}</Typography>
      <Button>Fetch Users</Button>
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
