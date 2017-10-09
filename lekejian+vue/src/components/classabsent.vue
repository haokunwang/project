<template>
	<div class="course">
		<div v-for="item in schedule" v-if="3===item.sign">
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
		</div>
	</div>
</template>




<script>
	export default{
		data:function(){
			return {
			}
		},
		mounted:function(){
			this.$store.commit("chgindex",3)
		},
		computed:{
			schedule:function(){
				return this.$store.state.user.schedule;
			}
		}
	}
</script>