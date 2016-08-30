<script>


	export default {

	    methods: {
	    	
	        
		    },
		    components:{
	          "v-company":require('./tabsContent/company.vue'),
	          "v-purchase":require('./tabsContent/purchase.vue'),
	          "v-sale":require('./tabsContent/sale.vue'),
	          "v-invoice":require('./tabsContent/invoice.vue'),
	          "v-customer":require('./tabsContent/customer.vue'),
	          "v-produce":require('./tabsContent/produce.vue'),
	          "v-supplier":require('./tabsContent/supplier.vue'),
	          "v-product":require('./tabsContent/product.vue'),
		    }
		 

	}


</script>    

<template  >
			<div class="block-content tab-content v-tab-content" id="v-tab-content">
			               
			                <v-company></v-company>
			                <v-purchase></v-purchase>
			                <v-sale></v-sale>
			                <v-invoice></v-invoice>
			                <v-customer></v-customer>
			                <v-produce></v-produce>
			                <v-supplier></v-supplier>
			                <v-product></v-product>
			              
			</div>
</template>
<style lang="sass">

</style>