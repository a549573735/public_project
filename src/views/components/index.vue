<script>

export default {
    el:'#app',
    data() {
        return {
            name: "guowenfh",
            age: "21"
        }
    }, methods: {
        golist() {
            this.$route.router.go({
                name: "list"
            });
        }
    }
}


</script>
<template>

    <div class="page page-current" id="pic-list">
        <nav class="bar bar-tab">
            <div class="content-padded" style="margin-top:0 ;margin-bottom:0 ; height: 100%;">
                <div class="row ">
                    <p class="col-50" style="margin-top: 0.5rem;">订单总价:<span style="color: #ff1f50; font-size: 1rem;" id="money">0</span>元</p>
                    <div class="col-50" style="padding: 0; height: 100%;"><a href="#"  style="height: 1.9rem; background: #2196f3;  line-height: 1.9rem;" class="button button-fill  button-success payment-btn">立即支付</a></div>
                </div>
            </div>
        </nav>
        <header class="bar bar-nav">
            <h1 class="title">小李的商户</h1>
        </header>
        <div class="content">
            <div class="pic-box">
                <div class="list-block media-list pic-list-checkbox">
                    <ul>
                        <li>
                            <label class="label-checkbox item-content">
                                <input type="checkbox" name="my-radio">
                                <div class="item-media" ><i class="icon icon-form-checkbox"></i></div>

                                <div class="item-inner">
                                    <div class="item-text" style="padding:0 1.5rem; margin-top: 0rem;">123规格1*24规格规格规格规格规格规格1*24规格规格规格规格规格规格1*24规格规格规格规格规格</div>
                                    <div class="changenum clearfix" >
                                        <p class=" online"><span>15</span>元</p>
                                        <p class=" offline" style="display:none"><span>12</span>元</p>
                                        <p class="buttons-row" style="width: 50%; float: right;"><a href="javascript:;" class="button ">-</a><a href="javascript:;" class="button ">1</a><a href="javascript:;" class="button ">+</a></p>
                                    </div>
                                </div>
                            </label>
                        </li>

                         <li>
                            <label class="label-checkbox item-content">
                                <input type="checkbox" name="my-radio">
                                <div class="item-media" ><i class="icon icon-form-checkbox"></i></div>

                                <div class="item-inner">
                                    <div class="item-text" style="padding:0 1.5rem; margin-top: 0rem;">123规格1*24规格规格规格规格规格规格1*24规格规格规格规格规格规格1*24规格规格规格规格规格</div>
                                    <div class="changenum clearfix" >
                                        <p class=" online"><span>15</span>元</p>
                                        <p class=" offline" style="display:none"><span>12</span>元</p>
                                        <p class="buttons-row" style="width: 50%; float: right;"><a href="javascript:;" class="button ">-</a><a href="javascript:;" class="button ">1</a><a href="javascript:;" class="button ">+</a></p>
                                    </div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="content-block-title">商家备注:</div>
            <div class="card">
                <div class="card-content">
                    <div class="card-content-inner">这是一个用纯文本的简单卡片。但卡片可以包含自己的页。</div>
                </div>
            </div>


            <div class="list-block media-list" style="margin-bottom: 0;">
                <ul><!--page-city-picker-->
                    <li>
                        <a href="javascript:;"  class="item-link item-content setAddress">
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">设置收获地址</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="list-block slect-pay" style="margin-top: 0;">
                <ul>
                    <li>
                        <div class="item-content" style="padding-left: 0;">
                            <div class="item-media"><i class="icon icon-form-gender"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">选择支付方式</div>
                                <div class="item-input" style="padding-left: 0.5rem;">
                                    <select id="selcet-pay">
                                        <option >在线支付</option>
                                        <option >货到付款</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="align-top">
                        <div class="item-content">
                            <div class="item-media"><i class="icon icon-form-comment"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">留言</div>
                                <div class="item-input">
                                    <textarea ></textarea>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
</div>

<div id="page-city-picker" class="page">
        <header class="bar bar-nav"> 
            <a class="button button-link button-nav pull-left  back_btn" >
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">收货地址</h1>
        </header>
        <div class="content">
            <div class="list-block">
                <ul>
                    <!-- Text inputs -->
                    <li>
                        <div class="item-content">
                            <div class="item-media"><i class="icon icon-form-name"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">收件人</div>
                                <div class="item-input">
                                    <input type="text" name="username" placeholder="Your name">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-media"><i class="icon icon-form-email"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">手机号码</div>
                                <div class="item-input">
                                    <input type="text" name="phonenum" id="iphone-num" placeholder="手机号码">
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Date -->
                    <li>
                        <div class="item-content">
                            <div class="item-media"><i class="icon icon-form-calendar"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">省市区</div>
                                <div class="item-input">
                                    <input type="text" name="city-adress" placeholder="" id="city-picker">
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Switch (Checkbox) -->
                    <li class="align-top">
                        <div class="item-content">
                            <div class="item-media"><i class="icon icon-form-comment"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">具体地址</div>
                                <div class="item-input">
                                    <textarea id="textarea-ads"></textarea>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content-block">
                <div class="row">
                    <div class="col-100"><a href="#" class="button button-big button-fill button-success" id="btn-success-address">保存并返回</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">

        .list-block li.active{ background: rgba(0, 176, 255, 0.23);}
        .list-block li label:active{background:none;}
        .buttons-row .button{ border-color: #b8b8b8; color:#000;  }
        .buttons-row .button.active{ background: #b8b8b8; border-color: #b8b8b8;}
        html:not(.watch-active-state) label.label-checkbox:active, label.label-checkbox.active-state{

            background: none;
        }
        .online,.offline{ width: 40%; float: left; text-align: left; padding-left: 8%;}

</style>
