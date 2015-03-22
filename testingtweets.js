var Twitter = require('twitter');
tweetus =''//value to pass in
 
var client = new Twitter({
  consumer_key: 'BWwrpygcZUADDrDdn1YnQuYKn',
  consumer_secret: 'wL6R7pndeL5INdBpCd64wJYWfS35pWrsZ8vsgUgGafGtWCRd7Q',
  access_token_key: '3074282449-rCa2tBbzAyzezcMju8ZWPV9hhHvo0b1sZ9jOz1S',
  access_token_secret: 'rYQHXRDh1OolSsSimzJY2qHJedsrNsQzqG82uxIRuq7uc'
});
 

// send the tweets , back end not showing on the page.
client.post('statuses/update', {status:tweetus }, function(error, tweet, response){

  if (!error) {
    console.log(tweet);
  }
});