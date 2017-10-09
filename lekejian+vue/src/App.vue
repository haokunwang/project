<template>
    <div id="app">
        <!-- <Personcen v-if="showhome"></Personcen> -->
        <m-header></m-header>
        <router-view></router-view>
    </div>
</template>

<script>
import '../static/css/common.css'
import '../static/js/fontsizeset.js'
import MHeader from './components/header.vue'
export default {
    components:{MHeader},
    computed:{

    },
}
</script>

<style>

</style>
