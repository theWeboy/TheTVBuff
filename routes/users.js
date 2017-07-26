/**
 * Created by devdeepak on 25/7/17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;



