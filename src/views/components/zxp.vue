var Vue = require('./common.vue');

//var parent = new Vue({
//    el: '#container',
//    data: {
//        message: []
//    },
//    events: {
//        'child-msg': function(msg) {
//            document.write('123123');
//        }
//    }
//});

// 创建根实例
new Vue({
    el: '#container',
    data: {
        abc: '5'
    }
});