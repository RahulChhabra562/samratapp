

module.exports = function(passport, user) {
    var User = user
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, username, password, done) {
            User.findOne({
                where: {
                    username: username
                }
            })
            .then((user) => {
                if(user) {
                    return done(null,false, {message: 'username already taken'});
                }

                else {
                    User.create({
                        username: username,
                        password: password,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        dob: req.body.dob
                    })
                    .then((user,created) => {
                        if(!user) {
                            return done(null,false)
                        }
                        if(user) {
                            return done(null, user)
                        }
                    });
                }
            });
        }
    ));
}