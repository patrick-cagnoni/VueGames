<template>
    <v-navigation-drawer 
        v-model="drawerState" 
        right  
        fixed 
        temporary 
        :disable-resize-watcher="true" 
        width="310"
    >
        <div class="d-flex flex-column" style="height: 100%">
            <Header />
            <Content />
            <Footer />
        </div>
    </v-navigation-drawer>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import Header from './components/Header'
    import Content from './components/Content'
    import Footer from './components/Footer'

    export default {
        components: {
            Header,
            Content,
            Footer
        },
         computed: {
            ...mapGetters({isOpen: 'minicart/isOpen'}),
            drawerState: {
                get () {
                    return this.isOpen
                },
                set (v) {
                    return this.setIsOpen(v)
                }
            }
        },
        methods: {
            ...mapMutations({
                closeMinicart: 'minicart/closeMinicart',
                setIsOpen: 'minicart/setIsOpen'
            })
        }
    }
</script>

<style lang="scss" scoped></style>