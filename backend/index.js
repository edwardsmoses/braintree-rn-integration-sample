const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/braintree', function(req, res) {
    res.sendFile(path.join(__dirname, 'braintree.html'));
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})