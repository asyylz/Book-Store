import { useLoaderData } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import UserPageBookList from '../componentsUser/UserPageBookList';

export default function UserEBooksPage() {
  const { favBooks } = useLoaderData();
  const eBooks = favBooks.filter((book) => book.saleInfo.isEbook);
  return <UserPageBookList books={eBooks} />;
}

// We use same favBookList for eBooksPage
export async function loaderFavBooks() {
  const user = JSON.parse(localStorage.getItem('user'));

  const db = getDatabase();
  const favBooksRef = ref(db, `users/${user.uid}/favBooks`);
  try {
    const snapshot = await get(favBooksRef);
    if (snapshot.exists()) {
      const favBooks = snapshot.val();

      return { favBooks, user };
    } else {
      console.log('No data available');
      return {};
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
}
