var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
		id  :1,
		name:'Nguyen Duy Thinh',
		age :25,
		sex :'male',
		});
});

module.exports = router;