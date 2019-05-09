/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 动态加载
 */
export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: () => import('../components/Home.vue'), meta: {keepAlive: true, title: 'homepage'}
    },
    {
      path: '/task1',
      component: () => import('../components/Task1.vue'),
      meta: {title: 'Task 1'}
    },
    {
      path: '/task2',
      component: () => import('../components/Task2.vue'),
      meta: {title: 'Task 2'}
    },
    {
      path: '/task3',
      component: () => import('../components/Task3.vue'),
      meta: {title: 'Task 3'}
    },
    {
      path: '/task4',
      component: () => import('../components/Task4.vue'),
      meta: {title: 'Task 4'}
    },
    {
      path: '/task5',
      component: () => import('../components/Task5.vue'),
      meta: {title: 'Task 5'}
    },
    {
      path: '/task6',
      component: () => import('../components/Task6.vue'),
      meta: {title: 'Task 6'}
    },
    {
      path: '/task7',
      component: () => import('../components/Task7.vue'),
      meta: {title: 'Task 7'}
    },
    {
      path: '/task8',
      component: () => import('../components/Task8.vue'),
      meta: {title: 'Task 8'}
    },
    {
      path: '/wiki',
      component: () => import('../components/Wiki.vue'),
      meta: {title: 'Wiki Space'}
    },
    {path: '*', redirect: '/home'}
  ]
})
