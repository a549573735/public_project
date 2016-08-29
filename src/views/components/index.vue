
<script>
  import Vue from "vue";
  import top from './r-top.vue';  
  import tabsBtns from './tab-btns.vue';  
  import tabContent from './tab-content.vue';  


  var Parent = Vue.extend({
          template: top.template,
      })
  var Parent2 = Vue.extend({
          template: tabsBtns.template,
      })
  var Parent3 = Vue.extend({
          template: tabContent.template,
      })

export default {
      el:'#app',
      components:{
        'my-top':Parent,
        'my-tabsbtn':Parent2,
        'my-tabcontent':Parent3,
     
      },
      methods: {
         
      }
}

</script>
<template >

      <div class="block">
              <my-top></my-top>
              <my-tabsbtn></my-tabsbtn>
              <my-tabcontent></my-tabcontent> 
        
      <div>

</template>
<style lang="sass">

</style>
