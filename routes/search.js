
/**
 * New node file
 */
var Queries = require('../esQueries');
/*exports.getdata = function(req, res){
	Queries.getRestaurantByCategory("Veg", function(docs){
		res.render('search', { 
			 docs :docs
		 });
	});
};*/

exports.getdata = function(req, res){
	//console.log("keyword :"+ req.params.keyword);
	Queries.getRestaurantByCategory(req.params.keyword, function(docs){
		res.render('search', { 
			 docs :docs
		 });
	});
};

exports.services = function(req, res){
	res.render('services');
};

exports.technology = function(req, res){
	res.render('technology');
};
exports.about = function(req, res){
	res.render('about');
};
exports.contact = function(req, res){
	res.render('contact');
};