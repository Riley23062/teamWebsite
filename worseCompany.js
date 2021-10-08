//Variables
const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const fs = require('fs');
var rawdata = fs.readFileSync('teamprofiles.json');
var readprofile = JSON.parse(rawdata);
//Folders
app.use(express.static(path.join(__dirname, '/views')));
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//Root directory for the website/ Home page
app.get('/', (req, res) => {
res.render('index.ejs');
})
//About page
app.get('/about', (req, res) => {
res.render('about');
})
//Riley's page
app.get('/Riley', (req, res) => {
  res.render('biography', readprofile.riley);
})
app.get('/Jenna', (req, res) => {
  res.render('biography', readprofile.jenna);

});

app.get('/Dylan', (req, res) => {
  res.render('biography', readprofile.dylan);
})

//Feedback page that writes to Feedback.json
app.get('/feedback', (req, res) => {
  let rawdata = fs.readFileSync('feedback.json');
  let feedback = JSON.parse(rawdata);
  if (req.query.name && req.query.adjective){
    let saveData = {
      name : req.query.name,
      adjective : req.query.adjective
    }
    feedback.comments.push(saveData);
    fs.writeFile('feedback.json', JSON.stringify(feedback) , 'utf8', function(){
      console.log("Wrote to file");
      res.send("Thank you for your personal information")})
  } else {
  res.send('You kinda suck, send better params, and fill in all the info');
  }
})
//The port it's listening on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//404 Page
app.use((req, res) => {
  res.render('404.ejs');

});
