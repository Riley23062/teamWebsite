
const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/about', (req, res) => {
res.sendFile(path.join(__dirname+'/about.html'));
})
app.get('/Riley', (req, res) => {
res.sendFile(path.join(__dirname+'/Riley.html'));
})
app.get('/Jenna', (req, res) => {
res.sendFile(path.join(__dirname+'/jenna.html'));
})
app.get('/Dylan', (req, res) => {
res.sendFile(path.join(__dirname+'/dylan.html'));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname+'/404.html'));

});
