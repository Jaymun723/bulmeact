const path = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(3000, () => console.log(`Server serving file on http://localhost:3000`))
