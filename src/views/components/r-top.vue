
<script>
   

	export default {

	    methods: {
	        
	    },
	 
	}

</script>    


<template >
     <div class="v-tabs-title"  id="v-tab-title">
                <div class="block">
                    <div class="block-header clearfix">
                        <div class="col-md-12 o-pd">
                            <h3 class="block-title">上海医德医疗设备有限公司</h3>
                        </div>
                        <div class="col-md-8 col-md-offset-4 text-right o-pd clearfix">

                            <div class="v-item-btn">
                                <button class="btn btn-minw btn-primary v-tabs-btn" data-toggle="modal"data-target="#modal-fromleft"  type="button">退出</button>
                            </div>

                            <div class="v-item-btn">
                                <button class="btn btn-minw btn-primary v-tabs-btn v-min-toggle" type="button">不合格</button>
                                <div class="v-modal-min">
                                    <div class="form-group clearfix o-mg">

                                        <div class="form-group ">
                                            <label class="col-md-3 control-label " for="val-suggestions">建议:</label>
                                            <div class="col-md-8 o-pd">
                                                <textarea class="form-control"  name="val-suggestions" rows="8" placeholder=""></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-10 col-md-offset-3 o-pd text-left v-code">
                                            <label class="css-input css-checkbox css-checkbox-primary" >
                                                <input type="checkbox"   ><span></span> 抄送至该企业所属园区
                                            </label>
                                        </div>

                                        <div class="col-md-10 col-md-offset-3 v-code text-left o-pd">
                                            <button class="btn btn-sm btn-primary v-t-b" type="submit">提交</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class=" v-item-btn">
                                <button class="btn btn-minw btn-primary v-tabs-btn" data-toggle="modal"data-target="#modal-fromphoto"  type="button">合格</button>
                            </div>

                            <div class=" v-item-btn">
                                <button class="btn btn-minw btn-primary v-tabs-btn v-min-toggle" type="button">建议</button>
                                <div class="v-modal-min">
                                    <div class="form-group clearfix o-mg">

                                      <div class="form-group ">

                                        <label class="col-md-3 control-label " for="val-suggestions">建议:</label>
                                        <div class="col-md-8 o-pd">
                                            <textarea class="form-control"  name="val-suggestions" rows="8" placeholder=""></textarea>
                                        </div>
                                      </div>

                                        <div class="col-md-10 col-md-offset-3 o-pd text-left v-code">
                                            <label class="css-input css-checkbox css-checkbox-primary" >
                                                <input type="checkbox"  ><span></span> 抄送至该企业所属园区
                                            </label>
                                        </div>

                                        <div class="col-md-10 col-md-offset-3 v-code text-left o-pd">
                                            <button class="btn btn-sm btn-primary v-t-b" type="submit">提交</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class=" v-item-btn">
                                <button class="btn btn-minw btn-primary v-tabs-btn v-min-toggle" type="button">预约</button>
                                <div class="v-modal-min">
                                    <div class="form-group clearfix o-mg">
                                        <div class="form-group clearfix">
                                            <form>
                                                <label class="col-md-3 control-label v-min-fz">约谈时间:</label>
                                                <div class="col-md-8 o-pd">
                                                    <input class="js-datepicker form-control" data-date-format="yyyy/mm/dd/" type="text" placeholder="mm/dd/yy">
                                                </div>
                                            </form>
                                        </div>

                                        <div class="form-group ">

                                            <label class="col-md-3 control-label " for="val-suggestions">建议:</label>
                                            <div class="col-md-8 o-pd">
                                                <textarea class="form-control" id="val-suggestions" name="val-suggestions" rows="8" placeholder=""></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-10 col-md-offset-3 o-pd text-left v-code">
                                            <label class="css-input css-checkbox css-checkbox-primary" >
                                                <input type="checkbox"  name="val-terms" value="1"><span></span> 抄送至该企业所属园区
                                            </label>
                                        </div>

                                        <div class="col-md-10 col-md-offset-3 v-code text-left o-pd">
                                            <button class="btn btn-sm btn-primary v-t-b" type="submit">提交</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="v-item-btn">
                                  <button class="btn btn-minw btn-primary v-tabs-btn" data-toggle="modal"data-target="#modal-fromleft" type="button">约谈</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>  