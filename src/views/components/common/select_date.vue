 
 <script type="text/javascript">


		export default {
                  
                    methods: {
                        
                    }
        }
 </script>



<template  >

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

</template>
