import { useUserProfileContext } from '../../context/UserProfileContext';

export default function DashBoard() {
  const { fetchUsers } = useUserProfileContext();
  
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
}
