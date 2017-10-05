<template>
	<div id="app">
		<nav class="navbar navbar-inverse navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">
                    <img src="static/img/logo.png" width="50">
                    <p>
                        <span>微世界</span>
                        <span>新零售商学院</span>
                    </p>
                </router-link>
                <button type="button" data-toggle="collapse" data-target="#app-navbar-collapse" class="navbar-toggle collapsed">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="app-navbar-collapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li v-for="item in list">
                    	<router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

	
	<router-view></router-view>


	<div class="footer-image">
        <div class="footer-box">
            <div class="footer-box-left">
                <div class="logo">
                    <img src="static/img/logo.png" alt="">
                </div>
                <p>微世界新零售商学院</p>
            </div>
            <div class="footer-box-right">
                <p>地址：浙江省杭州市余杭区梦想小镇E商村(阿里巴巴南门对面)5幢4楼</p>
                <p>邮箱：wsjsxy@126.com</p>
                <p>网址：www.wsjsxy.com</p>
                <p>电话：176 7075 5455</p>
                <p class="footer-images">
                    <img src="static/img/ewm.png" width="60px">
                </p>
            </div>
        </div>
    </div>


    <footer>
          Copyright © 2017 wsjsxy.com 浙 ICP 备 15019987 号
    </footer>
	</div>
</template>

<script>
import '../static/css/bootstrap.css'
import '../static/css/common.css'
import '../static/css/page.css'

import './assets/js/jquery-1.11.3.js'
import './assets/js/bootstrap.js'
export default {
	data:function(){
		return{
			list:[
				{name:"公司首页",path:"/"},
				{name:"公司时事",path:"/tidings"},
				{name:"师资力量",path:"/teachers"},
				{name:"课程介绍",path:"/courses"},
				{name:"开课咨询",path:"/curricula"},
				{name:"案例见证",path:"/witnesses"},
				{name:"招贤纳士",path:"/careers"},
				{name:"关于我们",path:"/aboutus"}
			]
		}
	},
	mounted:function(){
	}
}
</script>

<style>

</style>
