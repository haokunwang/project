<template>
<div>
    <div class="healmana_sec">
        <div>
            <span>身高</span>
            <span>
                <input type="text" v-model="height">cm
            </span>
        </div>
        <div>
            <span>体重</span>
            <span>
                <input type="text" v-model="weight">kg
            </span>
        </div>
        <div>
            <span>肌肉含量</span>
            <span>{{user.jrhl}}</span>
        </div>
        <div>
            <span>体质比</span>
            <span>{{user.tzb}}</span>
        </div>
    </div>


    <router-link to="/" @click.native="saveHeal" id="save_btn" class="healmana_btn btn_e75">
        保存
    </router-link>
</div>
</template>
<style scoped>
    .healmana_sec input{
        text-align: right;
    }
</style>
<script>
export default {
    data:function(){
        return {
            height:"",
            weight:""
        }
    },
    methods:{
        
        saveHeal:function(){
            this.$store.commit('saveHeal',{height:this.height,weight:this.weight});
        }
    },
    mounted:function(){
        this.height = this.user.height;
        this.weight = this.user.weight;
    },
    computed:{
        user:function(){
            return this.$store.state.user
        }
    },
}
</script>