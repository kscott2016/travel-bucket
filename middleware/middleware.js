function passDataToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

//Need to create isAdmin function to check to see if user is admin of the trip
//could try status/access codes too

export {
  passDataToView,
  isLoggedIn,
}
