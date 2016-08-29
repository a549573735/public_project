

exports.login = function(req, res, next) {
   res.render('pages/index', { title: 'Express' });
};

exports.zxp = function(req, res, next) {
   res.render('pages/zxp', {
      title: 'zxp'
   });
};
