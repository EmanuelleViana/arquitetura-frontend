import React, { Component } from 'react';

import { Stack } from "@mui/material";
import Facebook from "../../assets/img/fb.svg";
import Instagram from "../../assets/img/insta.svg";
import Linkedin from "../../assets/img/ln.svg";

import "./style.scss";

function Footer() {
  return (
    <div id="footer">
      <Stack
        direction="row"
        spacing={"36px"}
        display="flex"
        justifyContent="center"
      >
        <a href="https://github.com/EmanuelleViana">
          <img className="social pointer" src={Facebook}></img>
        </a>
        <a href="https://emanuelleviana.github.io/portfolio/">
          <img className="social pointer" src={Instagram}></img>
        </a>
        <a href="https://www.linkedin.com/in/emanuelle-viana/">
          <img className="social pointer" src={Linkedin}></img>
        </a>
      </Stack>
      <p className="center dark">
        Copyright ©2022 Todos os direitos reservados{" "}
      </p>
    </div>
  );
}

export default Footer;
