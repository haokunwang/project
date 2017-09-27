<template>
<div>
    <nav class="navclass">
        <ul>
            <li @click="chgindex(0)" :class="{open:0===myindex}"><router-link to="/myclass/">已预约课程</router-link></li>
            <li @click="chgindex(1)" :class="{open:1===myindex}"><router-link to="/myclass/classbegin">已上课程</router-link></li>
            <li @click="chgindex(2)" :class="{open:2===myindex}"><router-link to="/myclass/classcancel">已取消课程</router-link></li>
            <li @click="chgindex(3)" :class="{open:3===myindex}"><router-link to="/myclass/classabsent">已旷课程</router-link></li>
        </ul>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
    export default{
        data:function(){
            return{
            }
        },
        methods:{
            chgindex:function(index){
                this.$store.commit("chgindex",index)
            },

        },
        mounted:function(){},
        computed:{
            myindex:function(){
                return this.$store.state.myindex;
            }
        }
    }
</script>