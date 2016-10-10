var express = require('express');
var app = express();

var robot = require('robotjs');
robot.setMouseDelay(2);

var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

app.get('/:x/:y', function (req, res, next) {
	console.log('coords', req.params.x, req.params.y);
	robot.moveMouse(req.params.x, req.params.y);
	res.end('thanks for the input');
});

app.listen(1337, function () {
	console.log('listening on port 1337');
});