const path = require('path')
const express = require('express')
const sslRedirect = require('heroku-ssl-redirect')


const app = express()
const port = process.env.PORT ? process.env.PORT : 8081
const dist = path.join(__dirname, 'public')

app.use(express.static(dist))

app.use(sslRedirect())

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(port, (error) => {
  if (error) {
    console.log(error) // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port) // eslint-disable-line no-console
})
