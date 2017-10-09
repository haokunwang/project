<template>
	<div class="Htop">
		<div class="back" @click="back">
			<i></i>
			<span>返回</span>
		</div>
		<div class="title">{{title}}</div>
		<div class="other">&#8226; &#8226; &#8226;</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {

			}
		},
		methods:{
			back:function(){
				this.$router.back(); 
			}
		},
		mounted:function(){},
		computed:{
			title:function(){
				return this.$store.state.title
			}
		}
	}
</script>
<style>
	.Htop{
		width: 7.5rem;
		height: 0.9rem;
		background: linear-gradient(#1a191f, #39393b);
		overflow: hidden;
		font-size: 0.34rem;
		color: #ffffff;
		line-height: 0.9rem;
		padding-left: 0.22rem;
		padding-right: 0.28rem;
	}
	.Htop .back,.title{
		float: left;
	}
	.Htop .back{
		margin-right: 1.9rem;
        font-size: 0.3rem;
	}
    /*.Htop .back{}*/
	.Htop .other{
		float: right;
		font-size: 0.3rem;
		font-weight: bold;
	}
	.Htop .back i{
		width: 0.22rem;
		height: 0.4rem;
		margin-right: 0.08rem;
		display: block;
		float: left;
		background-image: url(../../static/img/lt.png);
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		margin-top: 0.25rem;
	}
</style>