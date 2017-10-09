<template>
<div v-if="user.member">
    <div class="meminfo_t">
        <img src="static/img/meminfo-2.png" alt="">
        <div class="mask_w"></div>
    </div>
    
    <div class="meminfo_sec mt_45">
        <div>
            <span>入场密码</span>
            <span>{{user.password}}</span>
        </div>
        <div>
            <span>会员卡名称</span>
            <span>{{user.memberName}}元健身月卡</span>
        </div>
        <div>
            <span>离到期天数</span>
            <span :shenday="day">{{day}}天</span>
        </div>
        <div>
            <span>续费时长</span>
            <span>{{user.memberTime}}天</span>
        </div>
    </div>
    <router-link to="/xumember" class="meminfo_btn btn_e75">
        我要续费
    </router-link>
</div>
<div v-else>
    <div class="buymem_t">
        <div class="mask_b"></div>
        <div class="txt">
            <p>乐客运动智能场馆24小时开放，无人值守</p>
            <p>所有场馆开放预约</p>
            <p>场馆环保无毒无害装修建材，先进新风系统</p>
            <p>空气质量检测系统</p>
        </div>
    </div>
    
    <div class="buymem_sec mt_45">
        
        <div>
            <span>购买会员卡</span>
        </div>

        <div v-for="(item,index) in member" @click="select(index)">
            <div :class="{sel:myIndex===index}"></div>
            <span>{{item.time}}</span>个月
            <span>{{item.price}}</span>元
        </div>
        
        <p>注意：<span>您正在购买会员卡，请核对信息后点击确认</span></p>
    </div>
    
    <router-link to="/buyjump" class="buymem_btn btn_e75" @click.native="addmember">
        立即购买
    </router-link>
</div>
</template>

<script>
    export default {
        data:function(){
            return{
                myIndex: 0,
                day:0
            }
        },
        methods:{
            select:function(index){
                this.myIndex = index;
            },
            addmember:function(){
                this.$store.commit('addmember',this.myIndex);
            }
        },
        mounted:function(){
            var delay = new Date(this.user.endTime) - new Date();
            this.day = Math.ceil(delay/1000/3600/24);

            this.$store.commit("chgtitle","操月会员卡");
        },
        watch:{
            endTime:function(){
                var delay = new Date(this.user.endTime) - new Date();
                this.day = Math.ceil(delay/1000/3600/24)
            }
        },
        computed:{
            user:function(){
                return this.$store.state.user
            },
            endTime:function(){
                return this.$store.state.user.endTime
            },
            member:function(){
                return this.$store.state.member
            }
        },
    }
</script>