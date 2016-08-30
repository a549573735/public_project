
var c_index=require('../src/controller/index');



module.exports=function (app){
	
	app.get('/', c_index.index);       					//公共模块   企业详情

	app.get('/zxp',c_index.zxp);

	app.get('/company/scs',c_index.dwgl_scs);			//单位管理 市场所

	app.get('/company/yq', c_index.dwgl_yq);			//单位管理 园区

	app.get('/admin/edit', c_index.jsgl_bjgly);			 //角色管理 编辑

	app.get('/admin/add', c_index.jsgl_zjyh);			 //角色管理 增加 

	app.get('/login', c_index.login);					 //登陆页面

	app.get('/annal/list', c_index.nbgs_lb);			 //年报公示列表

	app.get('/company', c_index.qiyejinru);				 //企业进入

	app.get('/region/qy', c_index.qjjr_qy); 			//区局进入 企业

	app.get('/region/qyjy', c_index.qjjr_qyjy);             //区局进入 企业建议
	
	app.get('/region', c_index.qijujinru);					  //区局进入

	app.get('/network/list', c_index.wljc_lb);                 //网络检查列表

	app.get('/administration/suggest/list', c_index.xzjy_lb);   //行政建议列表

	app.get('/administration/talks/list', c_index.xzyt_lb);    //行政约谈列表

	app.get('/admin/user/list', c_index.yhlb_bjyh);   //用户编辑列表

	app.get('/admin/user/add', c_index.yhlb_zjyh);   //用户添加
 
	app.get('/park', c_index.yqjr_qy); 				 // 园区进入

	app.get('/park/annual', c_index.yqnb_gslb);      // 园区年报 公示列表

	app.get('/order/list', c_index.yyjc_lb);         //预约列表


};


