import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

//const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: 'Dashboard',
    url: '/',
    //icon: icon("ic_analytics"),
  },
  {
    title: 'Favorites',
    url: 'favs',
    //icon: icon("purchase"),
  },
  {
    title: 'My e-books',
    //icon: icon("firms"),
    url: 'my-e-book',
  },
  {
    title: 'Purchased',
    //icon: icon("ic_cart"),
    url: 'purchased',
  },
];

const iconStyle = {
  backgroundColor: '#7D898C',
  color: '#F2F0EB',
  borderRadius: '1rem 0 1rem 0',
  marginTop: 1,
  fontFamily: 'Oswald',
  '&:hover': {
    backgroundColor: '#F2F0EB',
    color: '#7D898C',
  },
};
const selectedStyle = {
  backgroundColor: '#F2F0EB',
  color: '#7D898C',
  borderRadius: '1rem 0 1rem 0',
  fontFamily: 'Oswald',
  '&:hover': {
    backgroundColor: '#F2F0EB',
    color: '#7D898C',
  },
};

const UserPageMenuList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser } = useAuthContext();

  function handleNavigate(route) {
    // ASK
    console.log('clicked');
    if (route === '/') {
      console.log('clicked');
      navigate(`/${currentUser.uid}`);
    } else {
      console.log('clicked');
      navigate(route);
    }
  }

  return (
    <div>
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => handleNavigate(item.url)}
              sx={pathname == item.url ? selectedStyle : iconStyle}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  mask: `url(${item.icon}) no-repeat center / contain`,
                  mr: 2,
                  bgcolor: 'currentColor',
                }}
              />
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserPageMenuList;
