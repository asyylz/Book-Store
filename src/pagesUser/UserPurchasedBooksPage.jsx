import { useRouteLoaderData } from 'react-router-dom';
import PurchasedBooksTable from '../componentsUser/PurchasedBooksTable';
import Error from '../componentsCart/Error';
export default function UserPurchasedBooksPage() {
  const { user } = useRouteLoaderData('user');
console.log(user)
  let purchasedBooks;
  if (user.orders) {
    purchasedBooks = Object.values(user?.orders).map((order) => order);

  }
console.log(purchasedBooks)
  return purchasedBooks ? (
    <PurchasedBooksTable orders={purchasedBooks} />
  ) : (
    <Error title="Purchase" message="Currently you dont't have any purchase." />
  );
}
