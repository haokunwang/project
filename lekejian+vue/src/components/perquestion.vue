<template>
<div>
   <div v-for="item in question" class="question">
        <p>问：<span>{{item.question}}</span></p>
        <p><span>答：</span><span>{{item.answer}}</span></p>
    </div> 
</div>
</template>

<script>
export default {
    data:function(){
        return {
            
        }
    },
    methods:{
        go:function(){
            this.$store.commit('go',true);
        }
    },
    mounted:function(){
        this.$store.commit("chgtitle","");
    },
    computed:{
        question:function(){
            return this.$store.state.question
        }
    },
}
</script>