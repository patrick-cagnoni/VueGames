<template>
    <v-select 
        :value="orderBy"
        :items="orderByValues"
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

<style lang="scss" scoped></style>