##项目用到less
npm install less less-loader axios vuex boostrap
#####
mock 是模拟数据
api 代表所有的接口
base 基础组件
components 页面组件
#开发流程
--先写服务端 确保数据能正常返回
--增加api方法 实现调取数据的功能
--在哪个组件中应用这个api 如果是一个基础组件需要用这些数据
  在使用这个组件的父级中调用这个方法 将数据传递给基础组件
--写一个基础组件
  1.创建一个.vue文件
  2.在需要使用这个组件的父级中引用这个组件
  3.在组件中注册
  4.以标签的形式引入

##路由元信息

##下拉加载 /page

##coding split 代码分割

##vuex 平级组件交互 找共同的父级解决，跨组件交互，eventBus混乱

##vuex 主要借鉴了flux redux, vuex只能在vue中使用

##vuex为了大型项目而生，主要是状态管理，将数据统一管理
