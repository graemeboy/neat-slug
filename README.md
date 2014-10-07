Slugger for Node.js
======================

A Node.js module that concatenates keywords of a string with the '-' symbol. There are zero dependencies to this package, so it's very lightweight and quick to install and test.

### Install Slugger using npm

````javascript

npm install slugger
````

To use slugger, simply require it, and pass it your title text:

````javascript

var slugger = require('slugger');

// Make "Oh What a Wonderful World" a slug:
var slug = slugger("Oh what a wonderful world!");
console.log(slug); // -> 'wonderful-world'

// Turn the title "How to Lose a Guy in Ten Days" into a slug:
slug = slugger("How to lose a guy in ten days");
// Slug = 'lose-guy-ten-days'
````

Slugger can also handle more complex strings, as in the example below:

````javascript
var titleString = "123 1 2 3 @This., -34/ 1234 #! 90182.2312 $ % ^" +
	" & 1* green ;123: {} 123 a = 123123-_ smoothies with `~)() kale";

var slug = slugger(titleString);
console.log(slug); // -> green-smoothies-kale