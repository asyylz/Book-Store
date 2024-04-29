import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import PurchasedBooksTable from '../componentsUser/PurchasedBooksTable';
export default function UserPurchasedBooksPage() {
  const { user } = useRouteLoaderData('user');

  const purchasedBooks = Object.values(user.orders).map((order) => order);

  return <PurchasedBooksTable orders={purchasedBooks} />;
}
