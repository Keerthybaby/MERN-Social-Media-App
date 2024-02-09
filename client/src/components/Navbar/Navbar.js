import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core';
import useStyles from './styles';
import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";

const Navbar=()=>{
  const classes=useStyles();
  const user=null;
 return (
    <AppBar className={classes.appBar} position="static" color="inherit">
          <Link to="/" className={classes.brandContainer}>

          <img src={memoriesText} alt="icon" height="45px"/>
          <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
          </Link>
          <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.profile}>
                 <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
              </div>
            ):(
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
             )}
           
          </Toolbar>
         
        </AppBar>
  );
}


export default Navbar;