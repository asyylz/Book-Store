import { useLoaderData } from 'react-router-dom';
import UserPageBookList from '../componentsUser/UserPageBookList';
import { useRouteLoaderData } from 'react-router-dom';
export default function UserPurchasedBooksPage() {
  const { user } = useRouteLoaderData('user');
  console.log(user.orders);
  const purchasedBooks = Object.values(user.orders).flatMap((order) => order.items);
  console.log(purchasedBooks);
  return <UserPageBookList books={purchasedBooks} />;
}
