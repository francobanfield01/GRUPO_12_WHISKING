function cookieSession (req, res, next) {
  if(req.cookies.userWhisking){
      req.session.user = req.cookies.userWhisking;
      res.locals.user = req.session.user
  }
  next()
}

module.exports = cookieSession