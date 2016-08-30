
var c_index=require('../src/controller/index');



module.exports=function (app){
	
	app.get('/', c_index.index);

	app.get('/zxp',c_index.zxp);

	app.get('/company/scs',c_index.dwgl_scs);

	app.get('/company/yq', c_index.dwgl_yq);

	app.get('/admin/edit', c_index.jsgl_bjgly);

	app.get('/admin/add', c_index.jsgl_zjyh);

	app.get('/login', c_index.login);

	app.get('/annal/list', c_index.nbgs_lb);

	app.get('/company', c_index.qiyejinru);

	app.get('/region/qy', c_index.qjjr_qy);

	app.get('/region/qyjy', c_index.qjjr_qyjy);
	
	app.get('/region', c_index.qijujinru);

	app.get('/network/list', c_index.wljc_lb);

	app.get('/administration/suggest/list', c_index.xzjy_lb);

	app.get('/administration/talks/list', c_index.xzyt_lb);

	app.get('/admin/user/list', c_index.yhlb_bjyh);   //用户编辑列表

	app.get('/admin/user/add', c_index.yhlb_zjyh);   //用户添加
 
	app.get('/park', c_index.yqjr_qy); 				 // 园区进入

	app.get('/park/annual', c_index.yqnb_gslb);      // 

	app.get('/order/list', c_index.yyjc_lb);         //预约列表





};


