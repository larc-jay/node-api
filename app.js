
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , search = require('./routes/search')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
var conf = {
		  mountPath: 'http://localhost:3000',
};
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/search', function(req, res, next) {
	  var keyword = req.query.keyword.toLowerCase();
	  res.redirect(conf.mountPath + '/search/' + keyword); 
});


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/search/:keyword', search.getdata);
app.get('/services', search.services);
app.get('/technology', search.technology);
app.get('/contact', search.contact);
app.get('/about', search.about);
app.get('/api/:name',api.getMethod);
app.post('/api',api.postMethod);

/*app.get('/search/:keyword', search.getUserFavData , function(req, res, next) {
	console.log("keyword :"+ req.params.keyword);
	search.getUserFavData(req.params.keyword);
});*/


/*

app.get('/hashtag/:hashtag', function(req, res, next) {
	  var hashtag = req.params.hashtag.toLowerCase();
	  var span = (req.query.span)? req.query.span: '1w';
	  var timeAt = moment().subtract(TIME_LAG, 'minutes').startOf('hour').valueOf();
	  Queries.getHashtagViralTrend({hashtag: hashtag, span: span}, function(trend) {
	    var buckets = [];
	    trend.scoreByInterval.buckets.forEach(function(d) {
	      buckets.push({
	        key: d.key,
	        doc_count: d.doc_count,
	        avgViral: (d.avgViral.value)? d.avgViral.value: 0
	      });
	    });
*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
