import { Box } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import React, { Component } from 'react';

import "./style.scss";

function Header() {
  const routeChange = (route: string) => {
    window.location.href=route;
  };
  return (
    <header className="header">
      <nav className="menu pd-24">
        <Box sx={{ flexGrow: 1 }}>
          <Grid display="flex" justifyContent="center" container spacing={2}>
            <Grid item className="title text-md text-pink pointer">
              <span onClick={() => routeChange("/")}> Blog</span>
            </Grid>
            <Grid item className="title text-md pointer">
            <span onClick={() => routeChange("sobre")}> Sobre</span>
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
            <h1 className="title title-bold text-dark center">Lorem Ipsum</h1>
            <p className="text dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              diam eget libero aliquam porta a eu erat. Nullam massa eros,
              hendrerit id lectus vitae, volutpat porttitor tellus.
            </p>
          </div>
        </Grid>
      </Box>
    </header>
  );
}

export default Header;
