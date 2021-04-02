<template>
    <v-select 
        :value="orderBy"
        :items="orderByValues"
        width=200
        @change="setOrderBy"
        outlined
    />
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import orderByValues from '@/resources/order-by-values'

    export default {
        data() {
            return {
                orderByValues
            }
        },
        computed: {
            ...mapGetters({
                orderBy: 'products/orderBy'
            })
        },
        methods: {
            ...mapMutations({
                setOrderBy: 'products/setOrderBy'
            })
        },
    }
</script>

<style lang="scss">
    .v-select__selections {
        width: 200px !important;
    }
</style>