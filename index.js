const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/admin', function(req, res) {
    res.render('admin/index');
});

app.get('/admin-insights', function(req, res) {
    res.render('admin/insights');
});

app.listen(3000, function() {
    console.log('Server started on port 3000.');
});