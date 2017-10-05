<template>
	<div class="container">
        <div class="row">
            

            <div class="col-md-12 new con" v-for="item in list">
                <div class="col-md-3 consultation">
                    <img :src="'static/img/page4-'+item.img+'.png'" alt="" width="100%" height="100%">
                </div>
                <div class="col-md-6">
                    <div class="consultation-text">
                        <h3 style="color: rgb(51, 51, 51);">{{item.title}}</h3>
                        <h4 style="color: rgb(49, 176, 105);">讲师：{{item.teacher}}</h4>
                        <h4 style="color: rgb(170, 170, 170);">
                            开课时间：{{item.time}}
                        </h4>
                    </div>
                </div>
                <div class="col-md-3 consultation-desc">
                    <router-link :to="item.path">查看详情</router-link>
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
                {path:"/curricula/1",img:"1",title:"未来力量世界榜样",teacher:"好未来讲师团",intro:"青少年特色教育班",time:"2017-10-03 00:00:00"},
                {path:"/curricula/2",img:"2",title:"人性说服力演说",teacher:"亚洲人性营销第一人黄佰胜",intro:"一对多批发式成交、改变人生的课程",time:"2017-10-03 00:00:00"},
                {path:"/curricula/3",img:"3",title:"让你业绩倍增的一堂课",teacher:"亚洲人性营销第一人黄佰胜",intro:"一堂缔造12位世界吉尼斯销售冠军的课程",time:"2017-10-03 00:00:00"},
            ]
        }
    }
}
</script>