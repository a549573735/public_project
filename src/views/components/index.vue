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
       <my-top></my-top>
   </div>
   <div class="block">
           <div id="vtab">
                 <my-tabBtns></my-tabBtns>
           </div>
           <div id="vtabContent">
                 <my-tabContent></my-tabContent>
           </div>
    </div>

</template>
<style lang="sass">

</style>
