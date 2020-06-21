import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
// import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./custom.css";


export default function NavBar() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <AppBar className="nav" color="primary" /*style={{ background: '#188266' }}*/>
        <Toolbar>
          <Grid justify="space-between" container spacing={24}>
            <Grid >
              <Typography color="#FFFCCD">
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
    </ThemeProvider>
    </div>
  )
};
