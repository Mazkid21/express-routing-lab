var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}];
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	// response is json version of candies
	res.json(candies);
	next();
});

// Fill out the rest of the routes here

router.get('/:id', function(req,res){
	// response should send candies array request paramaters
	//with and id (not sure why -1 is needed but with out it, it was 4 instead of 3)
	res.send(candies[req.params.id-1]);


	next();
});

router.post('/', function(req, res){
	// newCandy is request body
	var newCandy = req.body;
	// newCandy's id is /candies id length (number of objescts already in array)
	newCandy.id = candies.length + 1;
	// push newCandy on to /candies with id of 5
	candies.push(newCandy);
	// response we get back is the new candy
	res.send(newCandy);
});

router.get('/', function(req,res) {
	
	res.json(candies);
	next();
});


router.put('/:id', function(req, res) {
	// updateCandy is candies/#
	var updateCandy = candies[req.params.id-1];
	// updateCandy's id is request {body}/id
	updateCandy.id = req.body.id;
	// updateCandy's id is request {body}/name
	updateCandy.name = req.body.name;
	// updateCandy's id is request {body}/id *updates with new from postman 
	updateCandy.color = req.body.color;

	candies.push(updateCandy);
	res.send(updateCandy);
	next();
});

router.get('/', function(req,res) {
	
	res.json(candies);
	next();

});


router.delete('/:id', function(req, res) {
	var deleteCandy = req.params.id-1;
	candies[deleteCandy] = null;
	res.send({"message":"deleted"});
	next();

});

router.get('/', function(req,res) {
	
	res.json(candies);
	next();

});





module.exports = router;