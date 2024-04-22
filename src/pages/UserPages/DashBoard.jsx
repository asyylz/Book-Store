import { useUserProfileContext } from '../../context/UserProfileContext';
import { useLoaderData } from 'react-router-dom';

export default function DashBoard() {
  const { fetchUser } = useUserProfileContext();
  //const { items, header } = useLoaderData();

  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={fetchUser}>Fetch Users</button>
    </div>
  );
}

export async function loaderUser(request) {
  const splitUrl = request.request.url.split('=');
  const category = splitUrl[1];

  const response = await fetch(``);
  // ASK loader function allows  not to manually extract the resposne
  const resData = await response.json();
  if (!response.ok) {
    throw json({ message: 'Could not load books...' }, { status: 500 });
  }
  return { items: resData.items, header: category };
}
