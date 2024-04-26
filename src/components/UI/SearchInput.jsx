import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectInput from './SelectInput';

import debounce from 'lodash-es/debounce';

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

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [selection, setSelection] = useState('Title');
  const navigate = useNavigate();
  //console.log(searchValue);

  const debouncedNavigate = debounce((search, field) => {
    navigate(`/books?searchValue=${searchValue}=&field=${selection}`);
  }, 2000); // Delay of 2000ms

  useEffect(() => {
    // Call the debounced navigate function whenever searchValue or selection changes
    if (searchValue && selection) {
      debouncedNavigate(searchValue, selection);
    }
  }, [searchValue, selection]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value); // Set the search value as user types
  };

  return (
    <>
      <SelectInput selection={selection} setSelection={setSelection} />
      <Box sx={{ flexGrow: 1, mr: '1rem' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Title,author,keyword or ISBN"
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onChange={handleInputChange}
          />
        </Search>
      </Box>
    </>
  );
}
