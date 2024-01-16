const express = require('express')
const dataRoutes = require('./src/data/routes')
const app = express()
const cors = require('cors')
const port = 3003

app.use(cors())

app.get((''), (req, res) => {
  res.send('Hello')
})

app.use('/api/v1/BVT', dataRoutes)

app.listen(port, () => {
  console.log(`Server listen to port ${port}`)
})