import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import Main from '../Upload-Way/Main';

const Navbar = () => {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Typography variant="h6" style={{ textAlign: "center", flexGrow: 1 }}>Patient Note Report</Typography>
            <img src="/image/Frame.svg" alt="Logo" style={{ maxWidth: '100px', alignSelf: "flex-end" }} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Grid container>
      <Main/>
    </Grid>
    </>
  );
};

export default Navbar;
