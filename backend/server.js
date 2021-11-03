const http = require('http')
const fs = require('fs')
const express = require('express')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'text/html')
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(5000, 'localhost', () => {
  console.log('listening on port 5000')
})
