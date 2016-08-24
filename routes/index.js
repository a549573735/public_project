
var c_index=require('../controller/index');




/* GET home page. */

module.exports=function (app){


		app.get('/', c_index.login);
		

}

