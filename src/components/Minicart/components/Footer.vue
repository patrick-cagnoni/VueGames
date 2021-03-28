<template>
    <div class="footer-wrapper">
        <div class="footer-info">
            <div class="shipping">
                <p>Frete</p>
                <p v-if="isFreeShipping">Grátis</p>
                <p v-else>{{format(totalShipping)}}</p>
            </div>
            <div class="subtotal">
                <p>Subtotal</p>
                <p>{{format(totalValue)}}</p>
            </div>
            <div class="total">
                <p>Total</p>
                <p v-if="isFreeShipping">{{format(totalValue)}}</p>
                <p v-else>{{format(totalValue + totalShipping)}}</p>
            </div>
            <v-btn 
                rounded
                dark
                class="btn-primary mb-5"
                title="Finalizar compra"
                @click.native="handleFinish"
                v-if="totalValue"
            >
                Finalizar compra
            </v-btn>
            <v-btn
                rounded
                title="Continuar comprando"
                @click.native="closeMinicart"
            >
                Continuar comprando
            </v-btn>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import format from '@/utils/currencyFormat'

    export default {
        computed: {
            ...mapGetters({
                totalShipping: 'minicart/totalShipping',
                totalValue: 'minicart/totalValue',
                isFreeShipping: 'minicart/isFreeShipping',
            }),
        },
        methods: {
            ...mapMutations({
                closeMinicart: 'minicart/closeMinicart'
            }),
            handleFinish() {
                alert("Obrigado por comprar na VueGames!")
                this.closeMinicart()
            },
            format
        }
    }
</script>

<style lang="scss" scoped>
    .footer-wrapper {
        flex: 0 1 auto;
        padding: 23px 12px 9px 12px;
        margin-top: auto;
        box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.21);
        position: relative;
        z-index: 2;
    }
    .footer-info {
        margin-bottom: 24px;

        >div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
    }
    .shipping,.subtotal {
        font-size: 14px;
        font-weight: 500;

        p {
            margin: 0;
        }
    }
    .total {
        p {
            font-weight: 900;
            font-size: 20px;

        }
    }
    .v-btn {
        width: 100%;
        font-size: 14px;
        margin-bottom: 11px;
    }

</style>