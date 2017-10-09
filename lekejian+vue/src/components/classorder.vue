<template>
	<div class="course">
		<div v-for="(item,index) in schedule" v-if="0===item.sign">
			<div class="cour_t">
				<p><span>{{item.time.split("-")[1]}}</span>月</p>
				<p>{{item.time.split("-")[1].length===1?"0" + item.time.split("-")[1]:item.time.split("-")[1]}}</p>
				<p>
					{{item.startTime}}
				</p>
			</div>
			<div class="cour_info">
				<p>{{item.name}}</p>
				<p>教练:<span>{{item.coach}}</span></p>
				<p>地点:<span>{{item.palce}}</span></p>
			</div>
			<div @click="canorder(index)" class="cour_btn btn_4a8">
				取消预约
			</div>
		</div>
		<router-link class="addcour" to="/weekclass">添加课程</router-link>
	 </div>
</template>
<style>
	.course{
		margin-bottom: 1rem;
	}
	.addcour{
		display: block;
		width: 7.5rem;
		height: 0.9rem;
		line-height: 0.9rem;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: #f66620;
		color: #ffffff;
		font-size: 0.32rem;
		text-align: center;
	}
</style>
<script>
	export default{
		data:function(){
			return {
			}
		},
		methods:{
			canorder:function(index){
				if(confirm("你确定取消预约吗？")){
					this.$store.commit('canorder',index);
				}
			}
		},
		mounted:function(){
			this.$store.commit("chgindex",0)
		},
		computed:{
			schedule:function(){
				return this.$store.state.user.schedule;
			}
		}
	}
</script>