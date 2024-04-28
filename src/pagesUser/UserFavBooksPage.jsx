import { getDatabase, ref, get, onValue } from 'firebase/database';
import UserPageBookList from '../componentsUser/UserPageBookList';
import { useState, useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { useUserProfileContext } from '../context/UserProfileContext';

export default function UserFavBooksPage() {
  //const { favBooks: initialFavBooks, user } = useLoaderData();
  //const { user } = useRouteLoaderData('user');
  const { favBooksUpdated } = useUserProfileContext();

  return <UserPageBookList books={favBooksUpdated} />; // we set statehere because needs to listen updates
}
