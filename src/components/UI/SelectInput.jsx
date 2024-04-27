import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
const preFixes = [
  'Author',
  'Title',
  'Publisher',
  'ISBN',
  'Subject',
];
export default function SelectInput({
  selection,
  setSelection,
}) {
  // const handleChange = (event) => {
  //   setSelection(event.target.value);
  // };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          sx={{ color: '#F2F0EB', fontFamily: 'Oswald' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label="Selection"
          onChange={handleSelectionChange}
        >
          {preFixes.map((prefix, index) => (
            <MenuItem key={index} value={prefix}>
              {prefix}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
