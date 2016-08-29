
var c_index=require('../src/controller/index');




module.exports=function (app){


		app.get('/', c_index.login);

		app.get('/aaa', c_index.aaa);

		app.get('/bbb', c_index.bbb);

		app.get('/ccc', c_index.ccc);

		app.get('/ddd', c_index.ddd);
		
}

