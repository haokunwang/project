<template>

<div>
    <div class="classdetail_top"></div>
    <div v-for="(item,index) in schedule" v-if="item.name==detail">
        <div class="classdetail_sec">
            <div class="info">
                <p>课程：<span>{{item.name}}</span></p>
                <p>教练：<span>{{item.coach}}</span></p>
                <div>
                    <span>难易程度：</span>
                    <img v-for="i in item.degree" src="static/img/eval.png" alt="">
                </div>
                <router-link @click.native="addschedule(item)" to="/myclass/" class="order">立即预约</router-link>
            </div>
            <div class="intro">
                <p>课程简介</p>
                <p>{{item.introduce}}</p>
            </div>
        </div>


        <div class="evaldetail">
            <p>历史评价</p>
            <div v-for="item in item.evaluate">
                <div>
                    <div class="prt">
                        <img :src="'static/img/'+item.imgSrc" alt="">
                    </div>
                    <span>{{item.userName}}</span>
                    <div class="pj">
                        <img v-for="i in item.degree" src="static/img/eval.png" alt="">
                    </div>
                </div>
                <p>{{item.message}}</p>
            </div>
        </div>
    </div>
</div>

</template>


<script>
    export default {
        data:function(){
            return{
            }
        },
        methods:{
            addschedule:function(item){
                var data = {
                    sign: 0,
                    name: item.name,
                    coach: item.coach,
                    palce:"城西银泰",
                    time: item.day,
                    startTime: item.time,
                    evalute:false
                }
                console.log(data);
                this.$store.commit('addschedule',data);
            }
        },
        mounted:function(){
            this.$store.commit("chgtitle","课程详情");
        },
        // watch:{
        //     detail:function(){}
        // },
        computed:{
            schedule:function(){
                return this.$store.state.schedule
            },
            detail:function(){
                var temp = (sessionStorage.name || this.$store.state.detail)
                console.log(sessionStorage.name)
                return temp
            }
        }
    }
</script>  