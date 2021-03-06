
const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/save', (req, res) => {
res.sendFile(path.join(__dirname+'/poof.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
