 
<script type="text/javascript">
    
    export default{

       props:['mydata','style'], 
       methods:{

       }
    }

                                            // <th class="text-center " style="width: 150px">检查状态</th>
                                            // <th class="text-center " style="width: 150px;">检查员</th>
                                            // <th class="text-center " style="width: 15%">检查日期</th>
                                            // <th class="text-center ">备注</th>
</script>

<template  >
  <div class="row v-table">
                            <div class="col-md-12">
                                <div class="block">
                                    <table class="table table-hover table-borderless">
                                        <thead>
                                        <tr class="v-table-tr">
                                            <th class="text-center " v-for="(index,item) in mydata.title" v-bind:style="{ width: style[$index] }">{{item}}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in mydata.content">
                                            <td class="text-center">{{item.title}}</td>
                                            <td class="text-center">{{item.state?'合格':'不合格'}}</td>
                                            <td class="text-center">{{item.name}}</td>
                                            <td class="text-center">
                                                {{item.date}}
                                            </td>
                                            <td class="text-center">
                                                {{item.message}} <a href="javascript:;" class="btn-link"> 详情</a>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
     </div>
</template>                        