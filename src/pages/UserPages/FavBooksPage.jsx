import { useLoaderData } from 'react-router-dom';
import { useUserProfileContext } from '../../context/UserProfileContext';
export default function FavBooksPage() {
  const { fetchUserData } = useUserProfileContext();
  const { data } = useLoaderData();
  console.log(data);

  return <div>favBooksPage</div>;
}

export async function loaderFavBooks() {
  const userData = await fetchUserData(); // Assuming fetchUserData now correctly returns data
  return { data: userData };
}
