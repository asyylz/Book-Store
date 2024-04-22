import UserPageNavigation from '../components/UserPageNavigation';
import { Outlet } from 'react-router-dom';
export default function UserPageLayout() {
  return (
    <div>
      <UserPageNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
