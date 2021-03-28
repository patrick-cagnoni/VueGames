import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './modules/products';
import minicartModule from './modules/minicart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    minicart: minicartModule,
  },
});