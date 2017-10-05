<template>
	<div class="container">
        <div class="row">
            <div class="col-md-4 new" v-for="item in list">
                <div class="thumbnail">
                    <router-link :to="item.path">
                        <div class="bottom-tips" :style="'background-image: url(static/img/page4-'+item.img+'.png'">
                            <p>{{item.title}}</p>
                        </div>
                    </router-link>
                    <div class="caption">
                        <h4>讲师：{{item.teacher}}</h4>
                        <p>{{item.intro}}</p>
                    </div>
                </div>
            </div>

        </div>
   </div>
</template>

<script>
export default {
    data:function(){
        return{
            list:[
                {path:"/courses/1",img:"1",title:"未来力量世界榜样",teacher:"好未来讲师团",intro:"青少年特色教育班"},
                {path:"/courses/2",img:"2",title:"人性说服力演说",teacher:"亚洲人性营销第一人黄佰胜",intro:"一对多批发式成交、改变人生的课程"},
                {path:"/courses/3",img:"3",title:"让你业绩倍增的一堂课",teacher:"亚洲人性营销第一人黄佰胜",intro:"一堂缔造12位世界吉尼斯销售冠军的课程"},
                {path:"/courses/4",img:"4",title:"最落地的闪电招商会",teacher:"黄阳明",intro:"闪电收人、收钱的密码"},
                {path:"/courses/5",img:"5",title:"内训现场实操出货",teacher:"微世界新零售商学院讲师团",intro:"微商团队首选内训"},
                {path:"/courses/6",img:"6",title:"微商人性三系统",teacher:"微世界新零售商学院讲师团",intro:"人性盈利系统、人性执行系统、人性团队密训"},
            ]
        }
    }
}
</script>