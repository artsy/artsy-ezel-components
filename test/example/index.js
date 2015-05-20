express = require('express');
app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res, next) {
  res.render('index');
});

app.listen(7000, function() {
  console.log('listening');
});
