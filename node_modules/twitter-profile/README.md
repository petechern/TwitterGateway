twitter-profile
===============

Returns a twitter profile object when given some oauth details for a twitter user

## usage

```
var profile = require('./index.js');

profile({
  username:..., // twitter screen name
  userid:..., // twitter user id
  consumer_key:... // app key,
  consumer_secret:... // app secret,
  oauth_token:... // user token,
  oauth_secret:... // user secret
}, function(error, user){

	// user is the users twitter profile (or an error)

})
```

## installation

```
$ npm install twitter-profile
```

## methods

### profile(options, function(){})

load the profile for a user with the following options:

 * username - twitter screen name e.g. quarryjs
 * userid - twitter user id - e.g. 576258381
 * consumer_key - the key used by your app
 * consumer_secret - the secret used by your app
 * oauth_token - the OAUTH token returned for the user
 * oauth_secret - the OAUTH secret returned for the user

## license

MIT