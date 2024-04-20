import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: 'Dashboard',
    url: '/account',
    //icon: icon("ic_analytics"),
  },
  {
    title: 'Favorites',
    url: '/account/favs',
    //icon: icon("purchase"),
  },
  {
    title: 'To Read',
    //icon: icon("sales"),
    url: '/account/toread/',
  },
  {
    title: 'My e-books',
    //icon: icon("firms"),
    url: '/account/my-e-book/',
  },
  {
    title: 'Reading Now',
    //icon: icon("brand"),
    url: '/account/readingNow/',
  },
  {
    title: 'Purchased',
    //icon: icon("ic_cart"),
    url: '/account/purchased/',
  },
];

const iconStyle = {
  backgroundColor: '#7D898C',
  color: '#F2F0EB',
  borderRadius: '1rem 0 1rem 0',
  marginTop: 1,
  '&:hover': {
    backgroundColor: '#F2F0EB',
    color: '#7D898C',
  },
};
const selectedStyle = {
  backgroundColor: '#F2F0EB',
  color: '#7D898C',
  borderRadius: '1rem 0 1rem 0',
  '&:hover': {
    backgroundColor: '#F2F0EB',
    color: '#7D898C',
  },
};

const UserPageMenuList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
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
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserPageMenuList;
