/*

  (The MIT License)

  Copyright (C) 2005-2013 Kai Davenport

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

/*
  Module dependencies.
*/
var request = require('request');
var qs = require('querystring');

module.exports = function twitter_profile(options, done){

  var error = null;
  console.dir(options);
  ['userid', 'username', 'consumer_key', 'consumer_secret', 'oauth_token', 'oauth_secret'].forEach(function(prop){
    if(!options[prop]){
      error = prop + ' is required as an option';
    }
  })

  if(error){
    return done(error);
  }

  var params = {
    screen_name: options.username,
    user_id: options.userid
  }
  var url = 'https://api.twitter.com/1.1/users/show.json?' + qs.stringify(params);

  request.get({
    url:url,
    oauth:options,
    json:true
  }, function (e, r, user) {
    if(e){
      return done(e);
    }
    if(user.errors){
      return done(user.errors[0].message); 
    }
    done(null, user);
  })


}