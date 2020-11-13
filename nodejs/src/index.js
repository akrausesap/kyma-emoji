const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 80;
const emojis = require('../emojis.json');

/**
 * Parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Parse application/json
 */
app.use(bodyParser.json())

/**
 * POST /api/emojify
 * 
 * @param body A list of names.
 * 
 * Example:
 * [string, string, ...]
 * 
 * @return payload An array of objects mapping the name to 
 * an emoji unicode.
 * 
 * Example:
 * [
 *  {
 *     name: string,
 *     emoji: string,
 *	   details:{
 *       category: string,
 *       char: string,
 *       codes: string
 *       name: string,
 *     }
 *  },
 *  {
 *     name: string,
 *     emoji: string,
 *	   details:{
 *       category: string,
 *       char: string,
 *       codes: string
 *       name: string,
 *     }
 *  },
 *  ...
 * ]
 */
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

/**
 * GET /
 * 
 * @return payload A hello message.
 */
app.get('/', (req, res) => {
  return res.send('Hello Kyma!');
});

/**
 * Listen to http requests.
 */
app.listen(port, () => console.log(`Listening on port: ${port}!`));
