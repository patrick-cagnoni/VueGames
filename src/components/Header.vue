<template>
    <v-app-bar
        app
        color="white"    
    >
        <div class="content d-flex justify-space-between col-8 offset-2 align-center">
            <div class="logo">Vue<span>Games</span></div>
            <v-badge 
                :content="totalItems.toString()" 
                bottom 
                overlap 
                color="red darken-3"
                offset-x="16"
                offset-y="16"
            >
                <v-btn icon @click="openMinicart">
                    <v-icon large color="black">mdi-cart</v-icon>
                </v-btn>
            </v-badge>
        </div>
    </v-app-bar>
</template>

<script>
    import { mapGetters, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapGetters({totalItems: 'minicart/totalItems'}),
        },
        methods: {
            ...mapMutations({
                openMinicart: 'minicart/openMinicart'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        width: 100%
    }
    .logo {
        font-size: 36px;
        color: #000;

        span {
            color: red;
        }
    }
</style>