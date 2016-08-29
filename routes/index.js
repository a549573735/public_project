
var c_index=require('../src/controller/index');




module.exports=function (app){
	app.get('/', c_index.login);
	app.get('/zxp', c_index.zxp);

    app.get('/common' , c_index.common)
};


