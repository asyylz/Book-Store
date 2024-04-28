import UserPageBookList from '../componentsUser/UserPageBookList';
import { useRouteLoaderData } from 'react-router-dom';
import { useUserProfileContext } from '../context/UserProfileContext';

export default function UserEBooksPage() {
  //const { user } = useRouteLoaderData('user');
  const { favBooksUpdated } = useUserProfileContext();
  const eBooks = favBooksUpdated?.filter((book) => book.saleInfo.isEbook);

  return <UserPageBookList books={eBooks} />;
}
