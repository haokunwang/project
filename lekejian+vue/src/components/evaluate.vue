
<template>
<div>
	<div class="eval_top">
		<div>
			<span>课程满意度</span>
			<div>
				<span v-for="i in 5" :class="{star:sche>=i,stark:sche<i}" @click="chgsche(i)"></span>
			</div>
		</div>
		<div>
			<span>服务态度</span>
			<div>
				<span v-for="i in 5" :class="{star:service>=i,stark:service<i}" @click="chgservice(i)"></span>
			</div>
		</div>
	</div>
	
	<textarea name="" id="" v-model="msg" placeholder="写点评价吧，对其他小伙伴会有帮助哦"></textarea>
	
	<router-link @click.native="chgeval" class="btn_e75" to="/myclass/classbegin">提交</router-link>
</div>
</template>

<script>
	export default{
		data:function(){
			return {
				sche: 1,
				service: 2,
				msg:""
			}
		},
		methods:{
			chgsche:function(index){
				this.sche = index;
			},
			chgservice:function(index){
				this.service = index;
			},
			chgeval:function(){
				var degree = Math.ceil((this.sche + this.service)/2)
				this.$store.commit("chgeval",{degree:degree,message:this.msg})
			}
		},
		mounted:function(){
			this.$store.commit("chgtitle","");
		},
		computed:{
			schedule:function(){
				return this.$store.state.user.schedule;
			}
		}
	}
</script>
