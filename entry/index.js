import Vue from "vue";

// import VueRouter from "vue-router";

// Vue.use(VueRouter);
// 引入vue以及vue-router的。

// 引入组件！
import index from 'components/index.vue';


//开启debug模式
Vue.config.debug = true;

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

//正式开始

// 路由器需要一个根组件。
// var App = Vue.extend({});

new Vue(index)

