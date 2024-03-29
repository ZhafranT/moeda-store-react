import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

function Cart({ cart }) {
  const classes = useStyles();

  const EmptyCart = () => <Typography variant="subtitle1">You Have no item in your shopping cart, start adding some!</Typography>;

  const FilledCart = () => (
    <Grid container spacing={3}>
      {cart.line_items.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <div className={classes.itemcart}>{item.name}</div>
        </Grid>
      ))}
      <div className={classes.cardDetails}>
        <Typography variant="h4">SubTotal : {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
            Empty Cart
          </Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </Grid>
  );

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
}

export default Cart;
