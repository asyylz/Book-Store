import { Avatar, Box, IconButton } from '@mui/material';

export default function SelectableAvatar({ ...props }) {

  const handleOpenUserMenu = (event) => {
    props.setAnchorElUser(event.currentTarget);
  };
console.log(props.user.uid)
  return (
    <IconButton
      onClick={handleOpenUserMenu}
      sx={{
        '&:hover': {
          backgroundColor: '#F29F05',
          cursor: 'pointer',
        },
        backgroundColor: props.anchorElUser ? '#F29F05' : 'transparent',
      }}
    >
      <Avatar alt={props.user?.displayName} src="/static/images/avatar/2.jpg" />
    </IconButton>
  );
}
