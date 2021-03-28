import fetchProducts from '@/services/products-api.js';

const loadProducts = (context) => {
  fetchProducts
    .then((response) => {
      context.commit('loadProducts', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  loadProducts,
};