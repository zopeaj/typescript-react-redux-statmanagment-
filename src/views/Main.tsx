import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Link, Container, Menu, MenuItem, Typography, Grid, TextField } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";



interface MainProps { }

export const MainPage: React.FC<MainProps> = () => {

  return(
     <Fragment>
       <div className="container">
         <Grid container spacing={0}>
           <Grid item>
             <AppBar>
               <Toolbar>
                 <IconButton>
                   <MenuIcon />
                 </IconButton>
                 <div className="logo">
                    <img src="assets/logoApp.png" alt="App Logo"/>
                 </div>
                 <NavLink>
                   <Button component={Link}></Button>
                 </NavLink>
               </Toolbar>
             </AppBar>
             <Menu id="menu-appbar">
               <Link component={NavLink} to="/trending" color="black" underlinde="none" variant="button">
                 <MenuItem>Trending</MenuItem>
               </Link>
               <Link component={NavLink} to="/social" color="black" underlinde="none" variant="button">
                 <MenuItem>Social</MenuItem>
               </Link>
               <Link component={NavLink} to="/advertisement" color="black" underlinde="none" variant="button">
                 <MenuItem>Advert</MenuItem>
               </Link>
             </Menu>
           </Grid>
           <Grid item>

           </Grid>
         </Grid>
       </div>
     </Fragment>
  );
}
