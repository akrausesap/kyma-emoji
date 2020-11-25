'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const emojis = require('./emojis.json');
const app = express();
const passport = require('passport');
const xssec = require('@sap/xssec');
const JWTStrategy = require('@sap/xssec').JWTStrategy;
const xsenv = require('@sap/xsenv');

function log(logTxt) {
    console.log(logTxt);
}

function logJWT(req) {
    var jwt = req.header('authorization');
    if (!jwt) {
        log('No JWT in Request - Call performed directly to App');
        return;
    }
    jwt = jwt.substring('Bearer '.length);
    log('JWT is: ' + jwt);
    xssec.createSecurityContext(jwt, xsenv.getServices({ uaa: 'emojicf-uaa' }).uaa, function(error, securityContext) {
        if (error) {
            log('Security Context creation failed');
            return;
        }
        log('Security Context created successfully');
        var userInfo = {
            logonName : securityContext.getLogonName(),
            giveName :  securityContext.getGivenName(),
            familyName : securityContext.getFamilyName(),
            email : securityContext.getEmail()
        };
        log('User Info retrieved successfully ' + JSON.stringify(userInfo));
    });

    if (req.user) {
        var myUser = JSON.stringify(req.user);
        var myUserAuth = JSON.stringify(req.authInfo);
        log('2nd. XsSec API - user: ' + myUser + ' Security Context: ' + myUserAuth);
    }
    // see it using: cf logs sapcpcfhw --recent
}

passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

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