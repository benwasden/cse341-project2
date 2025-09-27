const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

// router.get('/', (req, res) => { 
//     //#swagger.tags=['Hello World']
//     res.send("Hello world! This is Ben Wasden's CSE341 Week 3/4 project. Type /missions at the end of the URL to see a list of space flights!")
// });

router.use('/missions', require('./missions'));

router.use('/smissions', require('./smissions'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;