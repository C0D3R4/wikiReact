var Firebase = require('firebase');
var crypto = require('crypto');
var firebase = new Firebase('https://wikireact-470fd.firebaseio.com/');
var users = firebase.child('users');

function hash (password) {
    return crypto.createHash('sha512').update(password).digest('hex');
}

var router = require('express').Router();

router.use(require('body-parser').json());
router.use(require('cookie-parser')());
router.use(require('express-session')({
    resave: false,
    saveUninitialized: true,
    secret: 'C0D3R4.T34M;C0D3R4.T34M;C0D3R4.T34M;C0D3R4.T34M;'
}));

router.post('/api/signup', function (req, res) {
    var username = req.body.username,
        password = req.body.password;

        if(!username || !password)
            return res.json({ signedIn: false, message: 'no username or password'});

        users.child(username).once('value', function (snapshot) {
            if (snapshot.exists())
                return res.json({ signedIn: false, message: 'user already in use' });

            var userObj = {
                username: username,
                passwordHash: hash(password)
            };
            users.child(username).set(userObj);
            req.session.user = userObj;

            req.json({
                signedIn: true,
                user: userObj
        });
    });
});

router.post('/api/signup', function (req, res) {
    var username = req.body.username,
        password = req.body.password;

    if(!username || !password)
        return res.json({ signedIn: false, message: 'no username or password'});
    users.child(username).once('value', function (snapshot) {
        if (!snapshot.exists() || snapshot.child('passwordHash').val() !== hash(passoword))
            return res.json({ signedIn: false, message: 'Wrong username or passoword' });
        var user = snapshot.exportVal();

        req.session.user = user;
        req.json({
            signedIn: true,
            user: user
        });
    });
});

router.post('/api/signout', function(req, res) {
    delete req.session.user;
    res.json({
        signedIn: false,
        message: 'You have been singned out'
    });
});

module.exports = router;
