Slugger
======================

A Node.js module that concatenates keywords of a string with the '-' symbol.

### Install Slugger using npm

````javascript

npm install slugger

````

To use slugger, simply require it, and pass it your title text:

````javascript

var slugger = require('slugger');
	
// Turn the title "How to Lose a Guy in Ten Days" into a slug:
var slug = slugger("How to lose a guy in ten days");
// Slug = 'lose-guy-ten-days'

````


