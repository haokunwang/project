<template>
<div>
    <div class="wclass_top">
        <div class="place">
            <img src="static/img/place.png" alt="">
            <div>
                <p class="place1">
                    <span class="bor_top">城西银泰馆</span>
                    <img src="static/img/xiala.png" alt="">
                    <span>96</span>km
                </p>
                <p class="place2">详细地址：
                    <span>滨江区2号街2号路2幢222室</span>
                </p>
            </div>
        </div>
        <ul>
            <li v-for="(value,index) in weekName"
                :class="{on:index===newday,ons:index===myindex}"
                @click="filter(index)">
                <p>{{value}}</p>
                <p>{{weekday[index]}}</p>
            </li>
        </ul>
    </div>
    
    
    <div class="wclass_sec">
        
        <div v-for="item in schedule" v-if="item.day.split('-')[2]==weekday[selday]">
            <p>{{item.time}}</p>
            <p>{{item.name}}</p>

            <p v-if="item.day.split('-')[2]<weekday[newday]">过期</p>
            <p v-else-if="item.total <= item.num">满员</p>
            <p v-else>可预约</p>

            <router-link to="item.day.split('-')[2]<weekday[newday]" v-if="item.day.split('-')[2]<weekday[newday]" class="bgc_grey">已过期</router-link>
            <router-link to="" @click.native="paidui" v-else-if="item.total<=item.num" class="bgc_4a8b60">排队</router-link>
            <router-link to="/classdetail" @click.native="chgclass(item.name)" v-else>预约</router-link>

        </div>

    </div>
</div>
</template>
<style>
    a{
        color: #ffffff;
    }
    .bgc_grey{
        background-color: grey !important;
    }
    .ons{
        color: #e75813;
    }
</style>
<script>
    export default {
        data:function(){
            return {
                weekName: ["日","一","二","三","四","五","六"],
                weekday: [],
                newday: 0,
                selday:0,
                myindex: 0,
                scde:[]
            }
        },
        methods:{
            chgclass:function(data){
                this.$store.commit("chgclass",data)
            },
            filter:function(index){
                this.myindex = index;
                this.selday = index;
                this.scde = [];
                for(var i = 0;i < this.schedule.length;i++){
                    if(this.schedule[i].day.split("-")[2] == this.weekday[index]){
                        this.scde.push(this.schedule[i])
                    }
                }
            },
            paidui:function(){
                if(confirm("你确定排队吗？")){
                    alert("排队成功")
                }
            }
        },
        mounted:function(){
            var newdate = new Date();
            var num = newdate.getDay();
            this.newday = this.myindex = num;
            this.selday = this.myindex = num;
            newdate = new Date(newdate.setDate(newdate.getDate()-num-1))
            while(this.weekday.length < 7){
                this.weekday.push(new Date(newdate.setDate(newdate.getDate()+1)).getDate())
            }
        },
        computed:{
            schedule:function(){
                return this.$store.state.schedule
            }
        }
    }
</script>