import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectInput from './SelectInput';
import useDebounce from '../hooks/useDebounce';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // extra-small devices
      sm1: 800,
      sm2: 856, // small devices (customized from 600px to 480px)
      md: 996, // medium devices (customized from 900px to 768px)
      lg: 990, // large devices (customized from 1200px to 1024px)
      xl: 1173, // extra-large devices (customized from 1536px to 1440px)
    },
  },
});

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [selection, setSelection] = useState('Title');
  const navigate = useNavigate();

  const debouncedValue = useDebounce(searchValue, 600);

  useEffect(() => {
    if (debouncedValue) {
      navigate(`/books?q=${selection.toLowerCase()}:${searchValue}`);
    }
  }, [debouncedValue]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm1: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SelectInput selection={selection} setSelection={setSelection} />
        <Box sx={{ flexGrow: 1, m: '10px', width:{xs:'230px',sm1:'350px'}, height: '40px' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Title,author,keyword or ISBN"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Search>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
