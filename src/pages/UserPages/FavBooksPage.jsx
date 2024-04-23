import { useLoaderData } from 'react-router-dom';
import { useUserProfileContext } from '../../context/UserProfileContext';

import { getDatabase, ref, onValue, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

export default function FavBooksPage() {
  //const { fetchUserData } = useUserProfileContext();
  const { favBooks } = useLoaderData();
  console.log(favBooks);
  return <div>favBooksPage</div>;
}

export async function loaderFavBooks() {
  const user = JSON.parse(localStorage.getItem('user'));

  const db = getDatabase();
  const favBooksRef = ref(db, `users/${user.uid}/favBooks`);
  try {
    const snapshot = await get(favBooksRef);
    if (snapshot.exists()) {
      //console.log(snapshot.val());
      const favBooks = snapshot.val();
      console.log(favBooks);
      return { favBooks };
    } else {
      console.log('No data available');
      return {};
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
}
