'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const emojis = require('./emojis.json');
const app = express();

/**
 * Parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Parse application/json
 */
app.use(bodyParser.json())


function log(logTxt) {
    console.log(logTxt);
}



app.get('/api', function (req, res) {
    res.status(200).send('Hello World!')
});

app.post('/api/emojify', (req, res) => {
  const payload = req.body.map((name) => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

	  return {
      name,
      emoji: emoji.codes,
	    details: emoji
    };
  });

    return res.json(payload);
});

const PORT = process.env.PORT || 8088;

var server = app.listen(PORT, function () {

    const host = server.address().address;
    const port = server.address().port;

    log('Example app listening at http://' + host + ':' + port);

});