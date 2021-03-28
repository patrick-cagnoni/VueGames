<template>
    <div class="header-wrapper">
        <div class="content">
            <div class="minicart-title">
                <div class="icon-wrapper">
                    <v-icon>mdi-cart-variant</v-icon>
                </div>
                <span>Carrinho</span> {{ totalItems }} itens
            </div>
            <button class="btn-reset" @click="closeMinicart">
                <v-icon>mdi-close</v-icon>
            </button>     
        </div>
            <delivery-bar v-if="totalItems > 0" />
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import DeliveryBar from './DeliveryBar.vue'

    export default {
        computed: {
            ...mapGetters({totalItems: 'minicart/totalItems'}),
        },
        components: {
            DeliveryBar
        },
        methods: {
            ...mapMutations({
                closeMinicart: 'minicart/closeMinicart'
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .header-wrapper {
        flex: 0 1 auto;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        position: relative; 

            h3 {
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
    }
    .minicart-title {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;

        span {
            padding-right: 9px;
            margin-right: 15px;
            position: relative;

            &::after {
            content: '';
            background-color: #424242;
            width: 1px;
            height: 80%;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate3d(0, -50%, 0);
            }
        }
    }
    .icon-wrapper {
        margin-right: 15px;
    }
</style>