import UserPageNavigation from '../components/UserPageNavigation';
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
