import React from 'react';
import { Grid } from '@mui/material';

const GridLayout = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default GridLayout;