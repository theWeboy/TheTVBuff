/**
 * Created by devdeepak on 25/7/17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;