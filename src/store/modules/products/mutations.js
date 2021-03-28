import { sortArray } from './utils'

const loadProducts = (state, products) => {
    state.products = sortArray(products, state.orderBy)
  };
const setOrderBy = (state, orderBy) => {
  state.products = [...sortArray(state.products, orderBy)]
  state.orderBy = orderBy
}
  
  export default {
    loadProducts,
    setOrderBy
  };