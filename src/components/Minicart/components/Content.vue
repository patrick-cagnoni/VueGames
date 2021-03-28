<template>
    <div class="content-wrapper">
        <product 
            v-for="product in products" 
            :id="product.id"
            :key="product.id" 
            :image="product.image"    
            :name="product.name"    
            :price="product.price"
            :quantity="product.quantity"  
        />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Product from './Product'

    export default {
        components: {
            Product
        },
        computed: {
            ...mapGetters({products: 'minicart/products'}),
        }      
    }
</script>

<style lang="scss" scoped>
    .content-wrapper {
        flex: 1 1 auto;
        overflow-y: auto;
    }
</style>