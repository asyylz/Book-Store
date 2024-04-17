import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonCustom from '../components/UI/ButtonCustom';

const bookSections = ['Children books', 'Thriller books', 'Pshsycolg'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderColor: 'black',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, mt: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ButtonCustom buttonName="Children books" />
        </Grid>
      </Grid>
    </Box>
  );
}
