import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index' //6
import Body from '../components/Body'
import MyModel from '../components/main/homepage/MyModel'
import MyCooperation from '../components/main/homepage/MyCooperation'
import ReleaseModel from '../components/releaseModel/ReleaseModel'
import Search from '../components/search/search'
import ReleaseCompleted from '../components/releaseModel/releaseCompleted/ReleaseCompleted'
import SignIn from '../components/loginregister/SignIn'
import Login from '../components/loginregister/Login'
import RegisterOne from '../components/loginregister/RegisterOne'
import RegisterTwo from '../components/loginregister/RegisterTwo'
// import RegisterThree from '../components/loginregister/RegisterThree'
import RetrieveOne from '../components/loginregister/RetrieveOne'
import RetrieveTwo from '../components/loginregister/RetrieveTwo'
import RetrieveThree from '../components/loginregister/RetrieveThree'
import Edition from '../components/releaseModel/releaseCompleted/Edition'
import Cooperation from '../components/releaseModel/releaseCompleted/Cooperation'
import CooperationView from '../components/cooperation/CooperationView'


Vue.use(Router)

export default new Router({

  mode: "history",
  routes: [
    // {
    // 	path:"*",
    // 	redirect:"/"
    // },
    {
    	path:"/SignIn",
    	redirect:"/SignIn/Login"
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
          path: '/',
          name: 'Body',
          component: Body,
          children: [
            {
              path: '/',
              name: 'MyModel',
              component: MyModel
            },
            {
              path: '/mycooperation',
              name: 'MyCooperation',
              component: MyCooperation
            }
          ]
        },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/ReleaseModel',
          name: 'ReleaseModel',
          component: ReleaseModel
        },
        {
          path: '/MyCooperation/CooperationView',
          name: 'CooperationView',
          component: CooperationView
        },
        {
          path: '/ReleaseCompleted',
          name: 'ReleaseCompleted',
          component: ReleaseCompleted,
          children: [{
              path: '/ReleaseCompleted',
              name: 'Edition',
              component: Edition,
              },
              {
              path: '/ReleaseCompleted/Cooperation',
              name: 'Cooperation',
              component: Cooperation,
              },
          ]
        }
      ]
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
      children: [
        {
          path: '/SignIn/Login',
          name: 'Login',
          component: Login
        },
        {
          path: '/SignIn/RegisterOne',
          name: 'RegisterOne',
          component: RegisterOne
        },
        {
          path: '/SignIn/RegisterTwo',
          name: 'RegisterTwo',
          component: RegisterTwo
        },
        // {
        //   path: '/SignIn/RegisterThree',
        //   name: 'RegisterThree',
        //   component: RegisterThree
        // },
        {
          path: '/SignIn/RetrieveOne',
          name: 'RetrieveOne',
          component: RetrieveOne
        },
        {
          path: '/SignIn/RetrieveTwo',
          name: 'RetrieveTwo',
          component: RetrieveTwo
        },
        {
          path: '/SignIn/RetrieveThree',
          name: 'RetrieveThree',
          component: RetrieveThree
        }
      ]
    }

  ]
})
