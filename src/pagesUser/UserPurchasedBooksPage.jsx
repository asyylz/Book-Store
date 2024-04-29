import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import PurchasedBooksTable from '../componentsUser/PurchasedBooksTable';
export default function UserPurchasedBooksPage() {
  const { user } = useRouteLoaderData('user');
  console.log(user.orders);
  const purchasedBooks = Object.values(user.orders).map((order) => order);

  //   return <UserPageBookList books={purchasedBooks} />;

  return <PurchasedBooksTable orders={purchasedBooks} />;
}
