Vue.component('child', {
    template: '<div id="child-template">\
        <input v-model="msg">\
    <button @click="notify">Dispatch Event</button>',
    data: function() {
        return {msg: 'hello'}
    },
    methods: {
        notify: function() {
            this.$dispatch('child-msg', this.msg);
        }
    }
});


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