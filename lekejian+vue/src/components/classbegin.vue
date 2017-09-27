<template>
	<div class="course">

		<div v-for="(item,index) in schedule" v-if="1===item.sign">
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
			<router-link v-if="item.evalute" to="" class="cour_btn btn_4a8">已评价</router-link>
			<router-link @click.native="chgevalindex(index)" v-else to="/evaluate" class="cour_btn btn_4a8">评价</router-link>
		</div>

	</div>
</template>


<script>
	export default{
		data:function(){
			return {
			}
		},
		methods:{
			chgevalindex:function(index){
				this.$store.commit("chgevalindex",index)
			}
		},
		mounted:function(){},
		computed:{
			schedule:function(){
				return this.$store.state.user.schedule;
			}
		}
	}
</script>
	 