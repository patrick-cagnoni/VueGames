import { totalItems, totalShipping, totalValue, isFreeShipping } from './utils';

const updateMinicart = (state) => {
  const { products } = state
  state.totalValue = totalValue(products)
  state.totalItems = totalItems(products)
  state.totalShipping = totalShipping(products)
  state.isFreeShipping = isFreeShipping(state.totalValue)
}

const addProduct = (state, product) => {
    if(state.products.find(p => p.id === product.id)) return
    state.products.push(product)
    updateMinicart(state)
  }

const removeProduct = (state, productId) => {
    state.products = state.products.filter(p => p.id !== productId)
    updateMinicart(state)
  }

const openMinicart = (state) => {
  state.isOpen = true
}

const closeMinicart = (state) => {
  state.isOpen = false
}
const setIsOpen = (state, isOpen) => {
  state.isOpen = isOpen
}
const addQuantity = (state, productId) => {
  const products = state.products
  const product = products.find(p => p.id === productId)
  if(!product) return
  const index = products.indexOf(product)
  product.quantity++
  products.splice(index, 1, product)
  state.products = products
  updateMinicart(state)
}

const subtractQuantity = (state, productId) => {
  const products = state.products
  const product = products.find(p => p.id === productId)
  if(!product) return
  const index = products.indexOf(product)
  if(product.quantity > 1) product.quantity--
  products.splice(index, 1, product)
  state.products = products
  updateMinicart(state)
}
  
export default {
  addProduct,
  removeProduct,
  addQuantity,
  subtractQuantity,
  openMinicart,
  closeMinicart,
  setIsOpen,
  updateMinicart
};