const express = require('express')
var cors = require('cors')
const app = express()
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.set('port', process.env.PORT || 8080)


// DATABASE
var pgp = require('pg-promise')();

const db = pgp('postgres://g1827105_u:BAN8z0ikdH@db.doc.ic.ac.uk:5432/g1827105_u');

app.get("/hello/:arg", (req, res) => {
  console.log("Request Started")
  db.any('SELECT ' + req.params.arg + ' FROM notice')
    .then(function (data) {
      res.send({
        DATA: data
      })
    })
})

app.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'))
})
