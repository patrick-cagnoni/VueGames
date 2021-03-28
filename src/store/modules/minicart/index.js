import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    isOpen: false,
    products: [],
    totalItems: 0,
    totalValue: 0,
    totalShipping: 0,
    isFreeShipping: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};