var Queries = require('../esQueries');
/*exports.getdata = function(req, res){
	Queries.getRestaurantByCategory("Veg", function(docs){
		res.render('search', { 
			 docs :docs
		 });
	});
};*/

exports.getMethod = function(req, res){
	//console.log("keyword :"+ req.params.keyword);
	Queries.getRestaurantByCategory(req.params.name, function(err,docs){
		if(err){
		    res.send(err);
		}
		res.send(docs); 
	});
};

exports.postMethod = function(req, res){
	console.log("keyword :"+ req.body.name);
	console.log("address :"+ req.body.address);
	Queries.getRestaurantByCategory(req.body.name, function(err,docs){
		if(err){
		    res.send(err);
		}
		res.send(docs); 
	});
};