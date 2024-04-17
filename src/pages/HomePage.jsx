import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonCustom from '../components/UI/ButtonCustom';

const bookSectionLeft = ['Children books', 'Thriller books', 'Pshsycolg'];
const bookSectionRight = ['Children books', 'Thriller books', 'Pshsycolg'];

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid red',
  boxShadow: 'none',
  padding: '10px',
  textAlign: 'center',
}));
export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, mt: '1rem', ml: '4rem', mr: '4rem' }}>
      <Grid container spacing={2}>
        {/* ------------------------ Left ------------------------*/}
        <Grid item xs={3}>
          {bookSectionLeft.map((section) => (
            <Grid item xs={12}>
              <Item>
                <ButtonCustom buttonName={section} />
              </Item>
            </Grid>
          ))}
        </Grid>
        {/* ------------------------ Middle ------------------------*/}
        <Grid item xs={6}>
          <Item>
            <image></image>
          </Item>
        </Grid>
        {/* ------------------------ Right ------------------------*/}
        <Grid item xs={3}>
          {bookSectionRight.map((section) => (
            <Grid item xs={12}>
              <Item>
                <ButtonCustom buttonName={section} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
