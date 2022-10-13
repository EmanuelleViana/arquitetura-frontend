import { Box } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import React, { Component } from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="menu pd-24">
        <Box sx={{ flexGrow: 1 }}>
          <Grid display="flex" justifyContent="center" container spacing={2}>
            <Grid item className="title text-md text-pink pointer">
              Blog
            </Grid>
            <Grid item className="title text-md pointer">
              Sobre
            </Grid>
            <Grid item className="title text-md pointer">
              Contato
            </Grid>
          </Grid>
        </Box>
      </nav>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className="container-header"
          display="flex"
          justifyContent="center"
          container
        >
          <div className="circle">
            <div className="avatar"></div>
          </div>
          <div className="presentation">
            <h1 className="title title-bold text-dark center">Emanuelle Viana</h1>
            <p className="text dark">
              Desenvolvedora Web, 25 anos, pós graduanda em Engenharia de
              Software pela PUC-Minas. Mineira de Belo Horizonte.
            </p>
          </div>
        </Grid>
      </Box>
    </header>
  );
}

export default Header;
