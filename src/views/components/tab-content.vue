<script>


	export default {

	    methods: {
	    	
		    },
		    components:{
	          "v-company":require('./tabsContent/company.vue'),         // 企业信息 
	          "v-purchase":require('./tabsContent/purchase.vue'),       // 采购
	          "v-sale":require('./tabsContent/sale.vue'),               // 销售信息 
	          "v-invoice":require('./tabsContent/invoice.vue'),         // 发票信息 
	          "v-customer":require('./tabsContent/customer.vue'),		// 客户资质 
	          "v-produce":require('./tabsContent/produce.vue'),			// 生产商资质 
	          "v-supplier":require('./tabsContent/supplier.vue'),		// 供应商资质
	          "v-product":require('./tabsContent/product.vue'),			// 产品资质
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