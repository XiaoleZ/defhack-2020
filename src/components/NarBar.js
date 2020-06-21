import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography  color="inherit">
            Mental Health Project
          </Typography>
          <NavLink to="/signin" exact color="inherit">Login</NavLink>
          <NavLink to="/signup" exact color="inherit">SignUp</NavLink>
          <NavLink to="/survey" exact color="inherit">Survey</NavLink>
          <NavLink to="/journal" exact color="inherit">Journal</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar;