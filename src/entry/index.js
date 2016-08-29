import Vue from "vue";

import c_index from "../services/index.js"  //数据层


// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// 引入vue以及vue-router的。

// 引入组件！

 //组建 

import index from 'components/index.vue';  
import top from 'components/r-top.vue';  
import tabsBtns from 'components/tab-btns.vue';  
import tabContent from 'components/tab-content.vue';  

Vue.component('my-top',top)
Vue.component('my-tabsbtn',tabsBtns)
Vue.component('my-tabcontent',tabContent)


// //开启debug模式

Vue.config.debug = true;

 
index.data= ()=> c_index.login()  //
   

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

//正式开始

// 路由器需要一个根组件。

// var App = Vue.extend({});

new Vue(index)






