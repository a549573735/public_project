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
