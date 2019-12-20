<template>
    <div id="app">
        <NavBar/>
        <MobileNav/>
        <router-view></router-view>
        <transition name="fade">
            <ScrollTop v-if="show && !atBottom" @click="scrollTop"/>
        </transition>
        <Footer/>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {

    },
    data(){
        return{
            show: false,
            atBottom: false
        }
    },
    methods: {
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    this.atBottom = true
                } else {
                    this.atBottom = false
                }
            }
        },
        handleSCroll(){
            if(window.scrollY > 250){
                this.show = true
            }
            else{
                this.show = false
            }
        },
    },
    created(){
        window.addEventListener('scroll', this.handleSCroll);
    },
    mounted(){
        this.scroll()
    }
}
</script>
