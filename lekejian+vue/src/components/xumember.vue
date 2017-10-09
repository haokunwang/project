<template>
<div>
    <div class="xumem_t"></div>
    
    <div class="xumem_sec mt_45">
        <div>
            <span>续费时长</span>
        </div>
        <div v-for="(item,index) in member" @click="select(index)">
            <div :class="{sel:myIndex===index}"></div>
            <span>{{item.time}}</span>个月
            <span>{{item.price}}</span>元
        </div>
        
        <p>注意：<span>您正在给您的会员卡续费，请核对信息后点击确认</span></p>
    </div>
    
    <router-link to="/member" class="xumem_btn btn_e75" @click.native="addtime">
        确认
    </router-link>
</div>
</template>
<script>
   export default {
        data:function(){
            return{
                myIndex: 0,
            }
        },
        methods:{
            select:function(index){
                this.myIndex = index;
            },
            addtime:function(){
                this.$store.commit('addtime',this.myIndex);
            }
        },
        mounted:function(){
            this.$store.commit("chgtitle","操月会员卡");
        },
        computed:{
            user:function(){
                return this.$store.state.user
            },
            member:function(){
                return this.$store.state.member
            }
        },
    } 
</script>