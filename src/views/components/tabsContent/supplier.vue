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

            <div class="tab-pane">
                <div class="v-tabs-date">
                    <form class="form-horizontal clearfix" action="" method="post" onsubmit="return false;">
                       <div class="col-md-12">
                           <div class="form-group clearfix">
                            <label class="col-md-2 o-pd v-fz" >产品名称:</label>
                            <div class="col-md-5 ">
                                <div class="col-md-8 o-pd">
                                    <input class="form-control" type="text" id="example-if-password" name="example-if-password" placeholder="">

                                </div>

                                <div class="col-md-4 ">
                                    <button class="btn btn-default btn-primary" type="submit">查询</button>
                                </div>
                            </div>
                          </div>
                       </div>
                    </form>
                </div>
                 
                <v-table :style='style' :data='data'></v-table>
            </div>

</template>