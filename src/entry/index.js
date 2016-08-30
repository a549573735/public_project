import Vue from "vue";

import c_index from "../services/index.js"  //数据层

// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// 引入vue以及vue-router的。

// 引入组件！

//组建 

import index from 'components/index.vue';  
import top from 'components/r-top.vue';  
import tabBtns from 'components/tab-btns.vue';  
import tabContent from 'components/tab-content.vue';



// Vue.component('my-component', {
//   template: '<div>A custom component!</div>'
// })

// // 局部注册也可以这么做
// var Parent = Vue.extend({
// 	  components: {
// 	    'my-component': {
// 	      template: '<div>A custom component!</div>'
// 	    }
// 	  }
// })


var App = index.extend({
    components:{
    	'my-tabContent':tabContent,
    	'my-top':top,
    	'my-tabBtns':tabBtns,

    }
});


// //开启debug模式

Vue.config.debug = true;

 
index.data= ()=> c_index.login()  //
   

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

//正式开始

// 路由器需要一个根组件。

// var App = Vue.extend({});

new Vue(App)






