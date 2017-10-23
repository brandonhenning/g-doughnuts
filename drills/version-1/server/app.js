const express = require('express')
const app = express()
const port = 3000

app.get('/cake', (req, res, next) => {
  res.send('hi')
})

app.listen(port, () => {
  console.log('listening here ', port)
})
