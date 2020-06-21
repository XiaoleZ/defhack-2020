import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./custom.css";


export default function NavBar() {
  return (
    <div>
      <AppBar className="nav" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Grid justify="space-between" container spacing={24}>
            <Grid >
              <Typography  color="inherit">
              Mental Health Project
              </Typography>
            </Grid>
            <Grid >
              <NavLink to="/signin" exact className="nav-item">Login</NavLink>
              <NavLink to="/signup" exact className="nav-item">SignUp</NavLink>
              <NavLink to="/survey" exact className="nav-item">Survey</NavLink>
              <NavLink to="/journal" exact className="nav-item">Journal</NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
};