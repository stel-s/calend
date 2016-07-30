var googleapis = require('googleapis');
var googleAuth = require('google-auth-library');
var fs = require('fs');
var path            = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require ('cors');
var http = require('http');

app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// setup CORS

app.use(cors({credentials: true}));
app.use( function(req, res, next) {
    // Website you wish to allow to connect
    res.set('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    // Request headers you wish to allow
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');

    // Pass to next layer of middleware
    next();
});
app.use(express.static(path.join(__dirname, './static/')));

// --------------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------------

// System
var handler = function(x,y,z){

    console.log('inserted',x,y,z)
}
app.post('/system/state',handler);



    (function(){
    "use strict";

// Load client secrets from a local file.
// Load client secrets from a local file.
// Load client secrets from a local file.
    fs.readFile('./client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }

// Authorize a client with the loaded credentials, then call the
// Drive API.
        authorize(JSON.parse(content));
    });
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2();

    var service = googleapis.calendar('v3');


    var authorize = function(credentials) {


        var jwt = new googleapis.auth.JWT(
            credentials.client_email,
            null,
            credentials.private_key,
            ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/calendar']);



        jwt.authorize(function(err, result) {
                    console.log(result.access_token)
                    oauth2Client.setCredentials({
                        access_token: result.access_token

                    });
            var event = {
                'summary': 'Paradox Full Experience',
                'location': 'Paradox',
                'description': 'Full experience',
                'start': {
                    'dateTime': '2016-05-28T09:00:00-07:00'

                },
                'end': {
                    'dateTime': '2016-05-28T17:00:00-07:00'

                },

                'attendees': [
                    {'email': 'lpage@example.com'},
                    {'email': 'sbrin@example.com'},
                ],
                'reminders': {
                    'useDefault': false,
                    'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10},
                    ],
                },
            };
            service.events.insert({
                auth: oauth2Client,
                calendarId: 'stelios.sideras@gmail.com',
                resource: event
            }, function(err, event) {
                console.log('Event created: %s');
                for(var key in event){
                    console.log(event[key])
                }
                if (err) {
                    console.log('There was an error contacting the Calendar service: ' + err);
                    return;
                }
                console.log('Event created: %s', event.htmlLink);
            });

                    //service.events.list({
                    //    calendarId: 'primary',
                    //    auth: oauth2Client,
                    //    maxResults: 365,
                    //    singleEvents: true,
                    //        timeMin: (new Date()).toISOString(),
                    //    //    auth: auth,
                    //    //    calendarId: 'primary',
                    //
                    //    //    maxResults: 10,
                    //    //    singleEvents: true,
                    //    //    orderBy: 'startTime'
                    //}, function(err, response) {
                    //    if (err) {
                    //        console.log('The API returned an error: ' + err);
                    //        return;
                    //    }
                    //
                    //    var files = response.items;
                    //    if (files.length === 0) {
                    //        console.log('No files found.');
                    //    } else {
                    //        console.log('Files:');
                    //        for (var i = 0; i < files.length; i++) {
                    //            var file = files[i];
                    //            console.log('%s (%s)', file.title, file.id);
                    //        }
                    //    }
                    //});

                    service.events.list({
                        auth: oauth2Client,
                        calendarId: 'stelios.sideras@gmail.com',
                        timeMin: (new Date()).toISOString(),
                        maxResults: 365,
                        singleEvents: true,
                        orderBy: 'startTime',
                        showDeleted : false
                    }, function(err, response) {
                        if (err) {
                            console.log('The API returned an error: ' + err);
                            return;
                        }
                        var events = response.items;
                        console.log(response)
                        if (events.length == 0) {
                            console.log('No upcoming events found.');
                        } else {
                            console.log('Upcoming 10 events:');
                            for (var i = 0; i < events.length; i++) {
                                var event = events[i];
                                var start = event.start.dateTime || event.start.date;
                                console.log('%s - %s', start, event.summary);
                            }
                        }
                    });
                    //service.calendarList.list({
                    //    auth: oauth2Client,
                    //    calendarId: 'primary',
                    //    timeMin: (new Date()).toISOString(),
                    //    maxResults: 365,
                    //    singleEvents: true,
                    //    orderBy: 'startTime',
                    //    showDeleted : false
                    //}, function(err, response) {
                    //    if (err) {
                    //        console.log('The API returned an error: ' + err);
                    //        return;
                    //    }
                    //    var events = response.items;
                    //    console.log(response)
                    //
                    //});
                });

    };





})();

http.createServer().listen(3000);

