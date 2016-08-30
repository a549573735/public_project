<script>

export default {
    el:'#app',

    methods: {
        golist() {
            this.$route.router.go({
                name: "list"
            });
        }
    }
}

</script>
<template>
   {{data.title}}+{{data.data}}
   <div id="vtop">
       <my-top></mytop>
       myTabContent
   </div>
   <div class="block">
          <my-tabBtns> </my-tabBtns>
     

        <my-tabContent></my-tabContent>
    </div>

</template>
<style lang="sass">

</style>
