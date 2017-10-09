<template>
<div>
    <div class="jump_top">
        入场密码：<span>{{user.password}}</span>
    </div>
    
    <div class="jump_sec">
        <p>注意事项：</p>
        <div>
            <div v-for="(item,index) in orecautions">
                <p>{{index+1}}、 {{item.key}}</p>
                <p>{{item.value}}</p>
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

        },
        mounted:function(){
            this.$store.commit("chgtitle","");
        },
        computed:{
            user:function(){
                return this.$store.state.user
            },
            orecautions:function(){
                return this.$store.state.orecautions
            }
        },
    }
</script>