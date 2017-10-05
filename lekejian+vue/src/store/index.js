import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug=process.env.NODE_ENV !== 'production';

var store = new Vuex.Store({
    state:{
    //用户信息
        user:{name:"Mr.joden",imgSrc:"touxiang.png",tel:13785749687,height:167,weight:50,jrhl:"49/93",tzb:"70/90",member:true,password:"865492",memberName:"99",memberTime:30,startTime:"2017-9-15",endTime:"2017-10-15",
        //0--预约课程，1--以上课程，2--已取消课程，3--已旷课程
            schedule:[
                // {sign:0,name:"游泳",coach:"Mike",palce:"城西银泰",time:"2017-9-27",startTime:"13:00-14:00",evalute:false},
                {sign:0,name:"瑜伽",coach:"人鱼马甲",palce:"城西银泰",time:"2017-9-27",startTime:"15:00-16:00",evalute:false},
                {sign:1,name:"街舞",coach:"人鱼马甲",palce:"城西银泰",time:"2017-9-28",startTime:"11:00-12:00",evalute:false},
                {sign:1,name:"体操",coach:"人鱼马甲",palce:"城西银泰",time:"2017-9-29",startTime:"15:00-16:00",evalute:false},
                {sign:3,name:"健身",coach:"人鱼马甲",palce:"城西银泰",time:"2017-9-30",startTime:"13:00-14:00",evalute:false},
            ]
        },

        //user:{name:"MR.joden",imgSrc:"touxiang.png",tel:13785749687,height:167,weight:50,jrhl:"49/93",tzb:"70/90",member:false,password:"",memberName:"",memberTime:0,startTime:"",endTime:""},
    //会员卡种类
        member:[
            {price:"99.00",time:"1",day:30},
            {price:"188.00",time:"2",day:60},
            {price:"288.00",time:"3",day:90},
            {price:"388.00",time:"4",day:120}
        ],
    //课程的种类和信息
        schedule:[
            {name:"游泳",coach:"Mike",day:"2017-10-2",time:"10:00-12:00",total:20,num:10,degree:4,introduce:"游泳是夏季运动的最佳搭档，也属于有痒运动，能收紧小腹，是减肥的最佳运动",
                evaluate:[
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                ]
            },
            {name:"瑜伽",coach:"人鱼马甲",day:"2017-10-2",time:"10:00-12:00",total:20,num:20,degree:4,introduce:"瑜伽是夏季运动的最佳搭档，也属于有痒运动，能收紧小腹，是减肥的最佳运动",
                evaluate:[
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                ]
            },
            {name:"街舞",coach:"人鱼马甲",day:"2017-10-3",time:"11:00-12:00",total:20,num:15,degree:5,introduce:"瑜伽是夏季运动的最佳搭档，也属于有痒运动，能收紧小腹，是减肥的最佳运动",
                evaluate:[
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:5,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                ]
            },
            {name:"体操",coach:"人鱼马甲",day:"2017-10-1",time:"13:00-14:00",total:20,num:5,degree:3,introduce:"瑜伽是夏季运动的最佳搭档，也属于有痒运动，能收紧小腹，是减肥的最佳运动",
                evaluate:[
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:5,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                ]
            },
            {name:"健身",coach:"人鱼马甲",day:"2017-10-4",time:"13:00-14:00",total:20,num:20,degree:4,introduce:"瑜伽是夏季运动的最佳搭档，也属于有痒运动，能收紧小腹，是减肥的最佳运动",
                evaluate:[
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                    {userName:"天使的微笑",imgSrc:"touxiang-2.png",degree:4,message:"课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好课程很不错，教练很细心，感觉很好"},
                ]
            },
        ],
    //问答的内容
        question:[
            {question:"需要做人身运动吗？",answer:"当肌肉越松弛时，他们也更容易驾驭和扩张，做这些运动将减少受伤机会"},
            {question:"需要做人身运动吗？",answer:"当肌肉越松弛时，他们也更容易驾驭和扩张，做这些运动将减少受伤机会"},
            {question:"需要做人身运动吗？",answer:"当肌肉越松弛时，他们也更容易驾驭和扩张，做这些运动将减少受伤机会"},
            {question:"需要做人身运动吗？",answer:"当肌肉越松弛时，他们也更容易驾驭和扩张，做这些运动将减少受伤机会"},
            {question:"需要做人身运动吗？",answer:"当肌肉越松弛时，他们也更容易驾驭和扩张，做这些运动将减少受伤机会"}
        ],
    //注意事项的内容
        orecautions:[
            {key:"必要的热身运动",value:"当肌肉松弛时，他们也更容易被驾驭和扩张，做这些运将减少受伤机会"},
            {key:"极为必要的伸展运动",value:"伸展运动就是帮助你放松肌肉，从而防止的二天的肌肉酸痛"},
            {key:"超负荷的举重",value:"你需要慢慢地开始，并循环渐进地增加运动量"},
            {key:"过激的运动",value:"既然健身的目的是为以后一直坚恃下去，那么你就不要期望一下就拿到“金牌”。"},
            {key:"水分的必要补充",value:"当你正在进行运动时，身体会因流汗而迅速丧失水分，而这些液体必须及时补充"},
            {key:"过分依赖登山器",value:"当肌肉松弛时，他们也更容易被驾驭和扩张，做这些运将减少受伤机会"},
            {key:"必要的热身运动",value:"当肌肉松弛时，他们也更容易被驾驭和扩张，做这些运将减少受伤机会"},
            {key:"运动中不要吃喝",value:""},
            {key:"运动后的必要“冷却”",value:""}
        ],
    //储存地址信息
        place:[],
    //储存 进入哪个课程详情页
        detail: "",
    //myclass课程列表的索引
        myindex: 0,
    //储存 添加评价 的课程索引
        evalindex: 0
    },
    mutations:{

    //添加评价信息
        chgeval:function(state,data){
            var evalinfo = {
                userName: state.user.name,
                imgSrc: state.user.imgSrc,
                degree: data.degree,
                message: data.message
            };
            state.schedule[state.evalindex].evaluate.push(evalinfo);
        },
    //对 课程评价 的索引
        chgevalindex:function(state,data){
            state.evalindex = data + 1;
        },
    //myclass课程列表的索引 防止出现错误跳转
        chgindex:function(state,data){
            state.myindex = data;
        },
    //添加预约课程
        addschedule:function(state,data){
            state.user.schedule.push(data);
        },
    //取消预约
        canorder:function(state,data){
            state.user.schedule[data].sign = 2;
        },
    //进入detail课程详情页
        chgclass:function(state,data){
            state.detail = data;
        },
    //保存个人信息
        saveinfo:function(state,data){
            state.user.name = data.name;
            state.user.tel = data.tel;
        },
    //保存健康信息
        saveHeal:function(state,data){
            state.user.height = data.height;
            state.user.weight = data.weight;
        },
    //购买会员卡
        addmember:function(state,data){
            state.user.member = true;
            var psw = "";
            while(psw.length <= 6){
                psw += parseInt(Math.random()*10)               
            }
            state.user.password = psw;
            state.user.memberName = (+state.member[data].price);
            state.user.memberTime = state.member[data].day;
            var newt = new Date();
            state.user.startTime = newt.getFullYear() + "-" + (newt.getMonth()+1) + "-" + newt.getDate();
            var start = new Date(state.user.startTime);
            var end = start.setDate(start.getDate() + state.user.memberTime);
            state.user.endTime = new Date(end).getFullYear() + "-" + (new Date(end).getMonth()+1) + "-" + new Date(end).getDate();
        },
    //续费会员卡
        addtime:function(state,data){
            var time = new Date(state.user.endTime) - new Date();
            var addDay = state.member[data].day;
            state.user.memberName = +state.member[data].price;
            if(time >= 0){
                state.user.memberTime += addDay;
            }else if(time < 0){
                state.user.memberTime = addDay;
                var newt = new Date();
                state.user.startTime = newt.getFullYear() + "-" + (newt.getMonth()+1) + "-" + newt.getDate();
            }
            var start = new Date(state.user.startTime);
            var end = start.setDate(start.getDate() + state.user.memberTime);
            state.user.endTime = new Date(end).getFullYear() + "-" + (new Date(end).getMonth()+1) + "-" + new Date(end).getDate();
            console.log(state.user.endTime + " -stroe")
        }
    },
    
    plugins:debug ? [createLogger()]:[]
})
export default store
