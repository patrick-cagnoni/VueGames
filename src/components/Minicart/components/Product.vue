<template>
    <div class="product-wrapper">
        <div class="image">
            <img :src="`images/${image}`" :alt="name"/>
        </div>
        <div class="product-info">
            <div class="name">{{name}}</div>
            <div class="price">{{format(price)}}</div>
            <counter 
                :quantity="quantity"
                :onInc="() => addQuantity(id)"
                :onDec="() => subtractQuantity(id)"
            />
        </div>
        <div class="remove">
            <button
                class="btn-reset"
                title="Remover produto"
                @click="() => removeProduct(id)"
            >
                excluir
            </button>
        </div>
    </div>
</template>

<script>
    import Counter from './Counter'
    import format from '@/utils/currencyFormat'

    import { mapMutations } from 'vuex'
    export default {
        props: ['id', 'image', 'name', 'price', 'quantity'],
        components: {
            Counter,
        },
        methods: {
            ...mapMutations({
                addQuantity: 'minicart/addQuantity',
                subtractQuantity: 'minicart/subtractQuantity',
                removeProduct: 'minicart/removeProduct',
            }),
            format
        },
    }
</script>

<style lang="scss" scoped>
    .product-wrapper {
        display: flex;
        padding: 16px 0;
        margin: 4px 20px;
        position: relative;
    
        &:not(:last-child) {
            border-bottom: 1px solid #b7b7b7;
        }    
    }
    .image {
        width: 60px;
        flex-shrink: 0;

        img {
            width: 100%;
        }
    }
    .product-info {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        margin-left: 12px;
    }
    .name {
        font-size: 12px;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 8px;
    }
    .description {
        font-size: 12px;
        margin-bottom: 14px;
    }
    .price {
        display: flex;
        flex-direction: column;
        font-family: 'Arial';

        del {
            font-size: 10px;
            text-decoration: line-through;
            opacity: 0.35;
        }

        ins {
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
        }
    }
    .remove {
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        bottom: 27px;
        right: 0;

        button {
            text-decoration: underline;
        }
    }
</style>