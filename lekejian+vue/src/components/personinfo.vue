<template>
    <div>
       <div class="perinfo_sec mt_45">
            <div>
                <span>头像</span>
                <div class="img">
                    <img :src="src" alt="">
                </div>
            </div>
            <div>
                <span>姓名</span>
                <span :usrname="usname"><input type="text" v-model="usname"></span>
            </div>
            <div>
                <span>手机号</span>
                <span :usrtel="ustel"><input type="text" v-model="ustel"></span>
            </div>
        </div>
        
        <router-link to="/" @click.native="saveinfo" class="perinfo_btn btn_e75">
            保存
        </router-link>
    </div>
</template>
<style scoped>
    .perinfo_sec input{
        width: 2rem;
        text-align: right;
    }
</style>
<script>
export default {
    data:function(){
        return {
            src:"",
            usname:"",
            ustel:""
        }
    },
    methods:{
        saveinfo:function(){
            this.$store.commit('saveinfo',{name:this.usname,tel:this.ustel});
        }
    },
    mounted:function(){
        this.src = "static/img/" + this.user.imgSrc;
        this.usname = this.user.name;
        this.ustel = this.user.tel;
    },
    computed:{
        user:function(){
            return this.$store.state.user
        }
    },
}
</script>

<style>

</style>
