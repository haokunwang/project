import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'

import Tidings from '../components/tidings.vue'
import Tidings0 from '../components/tidings0.vue'
import Tidings1 from '../components/tidings1.vue'

import Teachers from '../components/teachers.vue'

import Courses from '../components/courses.vue'
import Courses0 from '../components/courses0.vue'
import Courses1 from '../components/courses1.vue'
import Courses2 from '../components/courses2.vue'
import Courses3 from '../components/courses3.vue'
import Courses4 from '../components/courses4.vue'
import Courses5 from '../components/courses5.vue'
import Courses6 from '../components/courses6.vue'

import Curricula from '../components/curricula.vue'
import Curricula0 from '../components/curricula0.vue'

import Witnesses from '../components/witnesses.vue'
import Careers from '../components/careers.vue'
import Aboutus from '../components/aboutus.vue'


Vue.use(Router)

export default new Router({
	routes: [
		{path:"/",name:"home",component:Home},
		{path:"/tidings",component:Tidings,
			children:[
				{path:"/",component:Tidings0},
				{path:"/tiding/1",component:Tidings1}
			]
		},
		{path:"/teachers",name:"teachers",component:Teachers},
		{path:"/courses",component:Courses,
			children:[
				{path:"/",component:Courses0},
				{path:"/courses/1",component:Courses1},
				{path:"/courses/2",component:Courses2},
				{path:"/courses/3",component:Courses3},
				{path:"/courses/4",component:Courses4},
				{path:"/courses/5",component:Courses5},
				{path:"/courses/6",component:Courses6},
			]
		},
		{path:"/curricula",component:Curricula,
			children:[
				{path:"/",component:Curricula0},
				{path:"/curricula/1",component:Courses1},
				{path:"/curricula/2",component:Courses2},
				{path:"/curricula/3",component:Courses3},
			]
		},
		{path:"/witnesses",name:"witnesses",component:Witnesses},
		{path:"/careers",name:"careers",component:Careers},
		{path:"/aboutus",name:"aboutus",component:Aboutus},
	]
})
