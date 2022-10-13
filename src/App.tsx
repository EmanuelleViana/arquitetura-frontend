import React from "react";
import logo from "./logo.svg";

import "./App.scss";
import Header from "./components/Header";
import Routes from "./routes";
import CustomRoutes from "./routes";
import { Box, Grid } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className="app-content"
          display="flex"
          justifyContent="center"
          container
        >
          <CustomRoutes />
        </Grid>
      </Box>

      <Footer/>
    </div>
  );
}

export default App;
