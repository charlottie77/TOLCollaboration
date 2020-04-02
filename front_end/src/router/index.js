import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import Start from '../views/Start.vue'
import GuideQuestion from '../views/GuideQuestion.vue'
import GuideAnswer from '../views/GuideAnswer.vue'
import Login from '../views/Login.vue'
import Final from '../views/FinalQuiz.vue'
// import GuideAnswerB from '../views/GuideAnswerB.vue'
// import GuideAnswerC from '../views/GuideAnswerC.vue'
import Video from '../views/Video.vue'
import CheckPoint from '../views/CheckPoint.vue'
import CheckAnswer from '../views/CheckAnswer.vue'
import Doc from '../views/Doc.vue'
import FinalReport from '../views/FinalReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/guide-question',
    name: 'GuideQuestion',
    component: GuideQuestion
  },
  {
    path: '/guide-answer',
    name: 'GuideAnswer',
    component: GuideAnswer
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/check-point',
    name: 'CheckPoint',
    component: CheckPoint
  },
  {
    path: '/check-answer',
    name: 'CheckAnswer',
    component: CheckAnswer
  },
  {
    path: '/doc',
    name: 'Doc',
    component: Doc
  },
  {
    path: '/final',
    name: 'Final',
    component: Final
  },
  {
    path: '/report',
    name: 'FinalReport',
    component: FinalReport
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
