<template>
    <div class="counter-wrapper">
        <button 
            class="btn-reset"
            @click="onDec"
            :disabled="quantity <= 1"
        >
            <v-icon size="12" color="#000">mdi-minus</v-icon>
        </button>
        <div class="quantity" >{{quantity}}</div>
        <button
            class="btn-reset"
            @click="onInc"
        >
            <v-icon size="12" color="#000">mdi-plus</v-icon>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['quantity', 'onInc', 'onDec']
    }
</script>

<style lang="scss" scoped>
    .counter-wrapper {
        border-radius: 45px;
        display: flex;
        align-items: center;
        margin-top: auto;
        padding: 11px 0;
        font-size: 12px;
        font-weight: 700;
        width: fit-content;
    }
    .quantity {
        padding: 0 25px;
    }
</style>