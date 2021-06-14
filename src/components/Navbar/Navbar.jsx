import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.appBar} color="inherit">
          <img src={logo} alt="Commerce.js" height="15px" className={classes.image} />
          MOEDA STORE
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show Cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
