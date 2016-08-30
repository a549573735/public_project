 <script type="text/javascript">

        export default {
                  data(){
                    return { data:{

                                title:['企业名称','检查状态','检查员','检查日期','备注'],
                                content:[{'title':'上海医德医疗设备有限公司',state:'true','name':'王先生',date:'2016-06-29','message':'该公司的销售及供应商'}]
                                
                                        },
                             style:['25%','100px','100px','15%','auto']             
                         }
                   },
                    methods: {
                        
                    },
                   components:{
                     'v-table':require('../common/table.vue'),
                     'v-search':require('../common/search.vue')
                   }
        }

 </script>

<template  >
				<div class="tab-pane">
                       
                          <v-search></v-search>
                          <v-table  :mydata='data' :style='style'></v-table>

         </div>

</template>