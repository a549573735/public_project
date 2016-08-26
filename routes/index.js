
var c_index=require('../src/controller/index');




module.exports=function (app){


		app.get('/', c_index.login);
		
		
}

