
//var services=require('../services/index.js');





exports.login=function(req, res, next) {

   res.render('pages/index', { title: 'Express',data:'123123' });

  
}


exports.aaa=function(req, res, next) {

 res.render('pages/login', { title: 'Express',data:'123123' });

}



exports.bbb=function(req, res, next) {

    res.render('pages/danweiguanliyuanqu', { title: 'Express',data:'123123' });

}




exports.ccc=function(req, res, next) {

     res.render('pages/qujujinru', { title: 'Express',data:'123123' });

}





exports.ddd=function(req, res, next) {


   res.render('pages/shichangsuo', { title: 'Express',data:'123123' });

}





