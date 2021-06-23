import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   {
//     id: 1,
//     name: 'Sepatu',
//     description: 'Sepatu lari',
//     price: 'Rp.700',
//     image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2b83e1f2-b5d8-4194-a37d-7a87979c8cb5/air-zoom-pegasus-38-air-kelly-anna-london-running-shoe-Cv6L5s.png',
//   },
//   { id: 2, name: 'Celana', description: 'Celana Jogging', price: 'Rp.500', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bsmjl6g8mcmx9d84qsf6/flex-stride-7-18cm-running-shorts-BZkZgC.png' },
//   { id: 3, name: 'Baju', description: 'Baju olahraga', price: 'Rp.800', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99d875fa-6e94-4f16-8dbc-9d53159baed8/essential-running-jacket-kXPK33.png' },
// ];

function Products({ products, onAddToCart }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
