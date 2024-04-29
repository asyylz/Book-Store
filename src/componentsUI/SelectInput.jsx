import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const preFixes = ['Author', 'Title', 'Publisher', 'ISBN', 'Subject'];
export default function SelectInput({ selection, setSelection }) {
  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          sx={{
            color: '#F2F0EB',
            fontFamily: 'Oswald',
            m: '10px',
            width: { xs: '150px', sm: '200px', md: '100%' },
            height: '40px',
          }}
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
