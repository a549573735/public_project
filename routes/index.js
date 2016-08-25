
var c_index=require('../controller/index');




module.exports=function (app){


		app.get('/', c_index.login);
		

}

