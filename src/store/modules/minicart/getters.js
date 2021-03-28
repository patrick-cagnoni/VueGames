const products = state => state.products
const totalItems = state => state.totalItems
const totalValue= state => state.totalValue
const totalShipping= state => state.totalShipping
const isFreeShipping = state => state.isFreeShipping
const isOpen = state => state.isOpen

export default {
  products,
  totalItems,
  totalValue,
  totalShipping,
  isFreeShipping,
  isOpen
};