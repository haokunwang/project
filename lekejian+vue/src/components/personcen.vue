<template>
    <div>
        <router-link to="/personinfo" @click.native="" class="percen_top">
            <div class="img">
                <img :src="src" alt="">
            </div>
            <div class="info">
                <p >{{user.name}}</p>
                <p >手机号：<span >{{user.tel}}</span></p>
            </div>
            <div class="jt"></div>
        </router-link>
        
        <div class="percen_sec">
            <router-link @click.native="" to="/myclass">
                <span>我的课程</span>
                <div class="jt"></div>
            </router-link>

            <router-link @click.native="" to="/member">
                <span>我的会员卡</span>
                <div class="jt"></div>
            </router-link>

            <router-link @click.native="" to="/healthmana">
                <span>健康管理</span>
                <div class="jt"></div>
            </router-link>

            <router-link @click.native="" to="/perquestion">
                <span>有问有答</span>
                <div class="jt"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                src:"",
            }
        },
        methods:{

        },
        mounted:function(){
            this.src = "static/img/" + this.user.imgSrc;
        },
        computed:{
            user:function(){
                return this.$store.state.user
            }
        },
    }

</script>