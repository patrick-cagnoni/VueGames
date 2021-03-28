<template>
    <div class="wrapper">
        <v-img :src="'images/' + image" alt="imagem"></v-img>
        <div class="score"><span>Score</span>{{score}}</div>
        <h3 class="name">{{name}}</h3>
        <div class="price">{{format(price)}}</div>
        <v-btn class="btn-primary" dark rounded @click="addProduct">Comprar</v-btn>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import format from '@/utils/currencyFormat'

    export default {
        props: [
            'id',
            'name',
            'image',
            'price',
            'score'
        ],
        methods: {
            ...mapMutations({
                addProductToState: 'minicart/addProduct',
                openMinicart: 'minicart/openMinicart',
                updateMinicart: 'minicart/updateMinicart',
            }),
            addProduct() {
                const {id, name, image, price, score } = this
                this.addProductToState({
                    id,
                    name,
                    image,
                    price,
                    score,
                    quantity: 1
                })

                this.openMinicart()
                this.updateMinicart()
            },
            format
        }, 
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    .wrapper {
            border: 1px dashed gray;
            padding: 20px;
            width: 220px;
            position: relative;
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                margin: 0 auto;
                width: 100%;
            }

            @media (max-width: 460px) {
                margin: 0 auto;
                width: 100%;
            }
        }
        img {
            @media (max-width: 768px) {
                width: 100%;
            }

            @media (max-width: 460px) {
                width: 100%;
            }
        }
        .name {
            display: inline-block;
            height: 46px;
            font-size: 18px; 
            margin-top: 5px;
        }
        .price {
            font-size: 24px;
            font-weight: 900;
            margin-bottom: 15px;
        }
        .score {
            position: absolute;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background-color: blue;
            top: 5px;
            right: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: #fff;
            font-family: 'Press Start 2P', cursive;

            span {
                position: absolute;
                font-size: 6px;
                top: 14px;
            }
        }
</style>