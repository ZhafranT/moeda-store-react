import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
// import { Products } from '@chec/commerce.js/features/products';

function Product({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom>{product.name}</Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography>{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
