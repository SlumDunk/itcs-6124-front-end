// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false
// 导入图片懒加载
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=error&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2261159625,1353429441&os=4045695406,246439474&simid=3401320047,328813484&pn=46&rn=1&di=69541951160&ln=1968&fr=&fmq=1529325438191_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fcdn.scratch.mit.edu%2Fstatic%2Fsite%2Fprojects%2Fthumbnails%2F1313%2F7603.png&rpstart=0&rpnum=0&adpicid=0',
  loading: 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=加载中gif&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=3177455996,543637814&os=1127035399,854071229&simid=0,0&pn=26&rn=1&di=44333826680&ln=1939&fr=&fmq=1529325471908_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D725c8caed662853592e0d229a0ef76f2%2Fc1a4e0fe9925bc31b56cf7c45ddf8db1cb13700f.jpg&rpstart=0&rpnum=0&adpicid=0',
  attempt: 1
})

/* eslint-disable no-new */
/**
 * 在进入路由之前 每一次都会执行此方法 全局钩子函数 拦截功能
 */
router.beforeEach(function (to,from,next) {
  console.log('router to--------'+to);
  document.title=to.meta.title;
  next();
});
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
