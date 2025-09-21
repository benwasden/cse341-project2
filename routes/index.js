const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send("Hello world! This is Ben Wasden's CSE341 Week 3/4 project. Type /missions at the end of the URL to see a list of space flights!")
});

router.use('/missions', require('./missions'));

router.use('/smissions', require('./smissions'));

module.exports = router;