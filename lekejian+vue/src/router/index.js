import Vue from 'vue'
import Router from 'vue-router'

import Personcen from '../components/personcen.vue'
import Personinfo from '../components/personinfo.vue'
import Healthmana from '../components/healthmana.vue'
import Perquestion from '../components/perquestion.vue'
import Member from '../components/member.vue'
import Xumember from '../components/xumember.vue'
import Buyjump from '../components/buyjump.vue'
import Weekclass from '../components/weekclass.vue'
import Classdetail from '../components/classdetail.vue'
import Myclass from '../components/myclass.vue'
import Classorder from '../components/classorder.vue'
import Classbegin from '../components/classbegin.vue'
import Classabsent from '../components/classabsent.vue'
import Classcancel from '../components/classcancel.vue'
import Evaluate from '../components/evaluate.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/',name: 'personcen',component: Personcen},

        {path: '/personinfo',name: 'personinfo',component: Personinfo},

        {path: '/healthmana',name: 'healthmana',component: Healthmana},

        {path: '/perquestion',name: 'perquestion',component: Perquestion},

        {path: '/member',name: 'member',component: Member},

        {path: '/xumember',name: 'xumember',component: Xumember},

        {path: '/buyjump',name: 'buyjump',component: Buyjump},

        {path: '/weekclass',name: 'weekclass',component: Weekclass},

        {path: '/classdetail',name: 'classdetail',component: Classdetail},

        {path: '/myclass',name: 'myclass',component: Myclass,
            children:[
                {path:"/myclass/",name:"classorder",component:Classorder},
                {path:"/myclass/classbegin",name:"classbegin",component:Classbegin},
                {path:"/myclass/classabsent",name:"classabsent",component:Classabsent},
                {path:"/myclass/classcancel",name:"classcancel",component:Classcancel}
            ]
        },
        {
          path: '/evaluate',
          name: 'evaluate',
          component: Evaluate
        },
        // {
        //   path: '/classdetail',
        //   name: 'classdetail',
        //   component: Classdetail
        // },
        // {
        //   path: '/classdetail',
        //   name: 'classdetail',
        //   component: Classdetail
        // },
    ]
})
