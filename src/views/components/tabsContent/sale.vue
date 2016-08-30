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
                   }
        }
 </script>

<template  >
    <div class="tab-pane ">
                        <div class="v-tabs-date">
                            <form class="form-horizontal clearfix"  method="post" onsubmit="return false;">
                                    <div class="col-md-12">
                                        <div class="form-group clearfix">
                                            <label class="col-md-2 o-pd v-fz" >检查时间:</label>
                                            <div class="col-md-5">
                                                <div class="input-daterange input-group" data-date-format="mm/dd/yyyy">
                                                    <input class="form-control" type="text"  name="example-daterange1" placeholder="开始">
                                                    <span class="input-group-addon">~</span>
                                                    <input class="form-control" type="text" name="example-daterange2" placeholder="结束">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>

                        
                           <v-table :style='style' :data='data'></v-table>
                    </div>  

</template>