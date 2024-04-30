import { Box, Divider, Typography, ListItem } from '@mui/material';
import UserPageNavigation from '../componentsUser/UserPageNavigation';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDatabase, ref, get, onValue } from 'firebase/database';
import { useLoaderData } from 'react-router-dom';
const drawerWidth = 240;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // extra-small devices
      sm1: 787,
      sm2: 856, // small devices (customized from 600px to 480px)
      md: 900, // medium devices (customized from 900px to 768px)
      lg: 1066, // large devices (customized from 1200px to 1024px)
      xl: 1173, // extra-large devices (customized from 1536px to 1440px)
    },
  },
});
export default function UserPageLayout() {
  const { user } = useLoaderData();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ml: { xs: 0, sm1: `${drawerWidth}px` }, }}>
        <ListItem>
          <Typography sx={{ fontFamily: 'Oswald' }} variant="h3">
            {`Welcome ${user.username}`}
          </Typography>
        </ListItem>
        <Divider variant="inset" />
      </Box>
      <UserPageNavigation />
      <Box sx={{ ml: { xs: 0, sm1: `${drawerWidth}px` }, marginBottom:'10rem', minHeight:'50vh'}}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

// async function loaderFavBooks() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const db = getDatabase();
//   const favBooksRef = ref(db, `users/${user.uid}/favBooks`);
//   try {
//     const snapshot = await get(favBooksRef);
//     if (snapshot.exists()) {
//       const favBooks = snapshot.val();
//       return favBooks;
//     } else {
//       console.log('No data available');
//       return {};
//     }
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch user data');
//   }
// }

export async function loaderUser({ params }) {
  const userId = params.userId;
  console.log(userId);
  const db = getDatabase();
  const userRef = ref(db, `users/${userId}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
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

// export async function combinedLoader({ params }) {
//   const userId = params.userId;
//   try {
//     const [favBooks, user] = await Promise.all([
//       loaderFavBooks(userId),
//       loaderUser(userId)
//     ]);
//     return { favBooks, user };
//   } catch (error) {
//     console.error('Error in combined loader:', error);
//     throw new Error('Failed to load data');
//   }
// }
