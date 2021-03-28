<template>
    <v-container>
        <v-row>
            <h2 class="title">Games</h2>
        </v-row>
        <v-row>
            <div class="col-sm-4 col-md-3 offset-sm-8 offset-md-9">
                <order-by />
            </div>
        </v-row>
        <div class="shelf">
            <product 
                v-for="product in products" 
                :key="product.id"
                :id="product.id" 
                :image="product.image"   
                :name="product.name"    
                :score="product.score"    
                :price="product.price" 
            />
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    import OrderBy from './OrderBy'
    import Product from './Product.vue'

    export default {
        components: { 
            OrderBy,
            Product 
        },
        computed: {
            ...mapGetters({
                products: 'products/products'
            }) 
        },
        methods: {
            ...mapActions({
                loadProducts: 'products/loadProducts'
            })
        },
        created() {
            this.loadProducts()
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        width: 100%;
        font-size: 24px;
        padding: 10px;
        border-bottom: 2px solid #000;
    }
    .shelf {
        display: grid;
        grid-template-columns: repeat(4, 220px);
        grid-gap: 7px;
        padding: 20px;
        justify-content: center;

        @media (max-width: 768px){
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
        }

        @media (max-width: 460px) {
            grid-template-columns: 1fr;
            grid-row-gap: 25px;
        }
    }
</style>