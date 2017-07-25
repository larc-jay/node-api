/**
 * New node file
 */
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: ['10.4.8.65:9200'],
  apiVersion: '5.4',
});
console.log('connect to cluster');
module.exports.getRestaurantByCategory = function(catname, callback) {
	  client.search({
	    index: 'deliveroo',
	    type: 'food',
	    body: {
	      query: {
	        match: {
	        	category: catname
	        }
	      },
	      size: 25
	    }
	  }).then(function(res) {
	      var _profile = (res.hits.total === 0)? null:  res.hits.hits;
	    if (callback) {
	      callback(_profile);
	    }
	  }, function(err) { throw err; });
	};
