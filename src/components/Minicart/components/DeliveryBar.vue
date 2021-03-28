<template>
    <div class="delivery-wrapper">
        <div class="message" v-if="amountRemain > 0">
            Falta pouco para seu frete ser grátis!
        </div>
        <div class="message" v-else>
            Você ganhou <span>Frete Grátis</span>!
        </div>
        <div class="bar-info">
            <span>{{format(totalValue)}}</span>
            <div class="progress">
                <div class="progress-bar" :style="{width: `${amountProgress}%`}" />
            </div>
            <span>{{format(targetValue)}}</span>
        </div>
    </div>
</template>

<script>
    import { FREE_SHIPPING_THRESHOLD } from '@/constants';
    import { mapGetters } from 'vuex'
    import format from '@/utils/currencyFormat'

    export default {
        data() {
            return {
                targetValue: FREE_SHIPPING_THRESHOLD,
                amountRemain: FREE_SHIPPING_THRESHOLD,
                amountProgress: 0,
            }
        },
        computed: {
            ...mapGetters({totalValue: 'minicart/totalValue'}),           
        },
        methods: {
            format,
        },
        created() {
            this.amountProgress = (this.totalValue * 100) / this.targetValue
        },
        beforeUpdate() {
            this.amountProgress = (this.totalValue * 100) / this.targetValue
            this.amountRemain = this.targetValue - this.totalValue
        }
    }
</script>

<style lang="scss" scoped>
    .delivery-wrapper {
        display: flex;
        margin: 0 6px;
        flex-direction: column;
        padding: 14px 12px 13px 12px;
        background-color: #ededed;
        border-radius: 4px;
    }
    .message {
        font-size: 14px;
        color: #424242;
        margin-bottom: 16px;
        text-align: center;

        span {
            font-weight: 800;
        }
    }
    .bar-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 12px;
            font-family: 'Arial';
            white-space: nowrap;
        }
    }
    .progress {
        overflow: hidden;
        position: relative;
        width: 100%;
        margin: 0 11px;
        background-color: #fff;
        height: 5px;
        border-radius: 4px;
    }
    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 4px;
        background-color: #FD0000;
        will-change: width;
        transition: width 225ms ease-in-out;
    }
</style>