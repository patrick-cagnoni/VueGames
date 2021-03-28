<template>
  <v-app>
    <minicart />
    <app-header />
    <v-main>
      <products />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import Minicart from './components/Minicart';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Minicart,
    AppHeader: Header,
    Products,
    AppFooter: Footer
  }
};
</script>
<style lang="scss">
  * {
    font-family: 'Roboto';
  }
  .btn-reset {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;

    &:hover {
      background: transparent;
      box-shadow: 0px 0px 0px transparent;
      border: 0px solid transparent;
      text-shadow: 0px 0px 0px transparent;
    }
    &:active, &:focus {
      outline: none;
      border: none;
    }
  }
  .btn-primary {
      background-color: #D32F2F !important;
  }
</style>