import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonCustom from '../components/UI/ButtonCustom';

const bookSections = ['Children books', 'Thriller books', 'Pshsycolg'];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid red',
  boxShadow:'none',
  padding: '10px',
  textAlign: 'center'
}));
export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, mt: '1rem', ml: '4rem', mr: '4rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <ButtonCustom buttonName="Children books" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
