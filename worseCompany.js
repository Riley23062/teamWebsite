const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const fs = require('fs');

var rawdata = fs.readFileSync('teamprofiles.json');
var readprofile = JSON.parse(rawdata);


app.use(express.static(path.join(__dirname, '/views')));
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index.ejs');
})
app.get('/about', (req, res) => {
res.render('about');
})
app.get('/Riley', (req, res) => {
res.render('biography', readprofile.riley);
})
app.get('/Jenna', (req, res) => {
res.render('biography', readprofile.jenna);

});

app.get('/Dylan', (req, res) => {
  res.render('biography', readprofile.dylan);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res) => {
  res.render('404.ejs');

});
