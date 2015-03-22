var profile = require('./index.js');

profile({
  username:'quarryjs',
  userid:'576258381',
  oauth_token:'',
  oauth_secret:'',
  consumer_key:'',
  consumer_secret:''
}, function(error, user){
  console.log('-------------------------------------------');
  console.dir(error);
  console.dir(user);
})