var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);
var http = require('http');


// Initialize the accelerometer.
accel.on('ready', function () {
    // Stream accelerometer data
  accel.on('data', function (xyz) {
  	var req = http.get('http://192.168.1.3:1337/200/300', function (res) {
  		res.on('data', function (chunk) {
  			console.log(chunk);
  		});

  		res.on('end', function () {
  			console.log('response received');
  		});
  	});
  	req.on('error', function (e) {
  		console.log('problem with request');
  	});
  	req.end();
  });

});

accel.on('error', function(err){
  console.log('Error:', err);
});