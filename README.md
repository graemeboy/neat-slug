Neat Slug for Node.js
======================

Neat Slug is a simple Node.js module that concatenates keywords of a string with the '-' symbol. There are zero dependencies to this package, so it's very lightweight and quick to install and test.

### Install Neat Slug using npm

````javascript
npm install neat-slug
````

To use Neat Slug, simply require it, and pass it your title text:

````javascript
var neatSlug = require('neat-slug');

// Make "Oh What a Wonderful World" a slug:
var slug = neatSlug("Oh what a wonderful world!");
console.log(slug); // -> 'wonderful-world'

// Turn the title "How to Lose a Guy in Ten Days" into a slug:
slug = neatSlug("How to lose a guy in ten days");
// Slug = 'lose-guy-ten-days'
````

Neat Slug can also handle more complex strings, as in the example below:

````javascript
var titleString = "123 1 2 3 @This., -34/ 1234 #! 90182.2312 $ % ^" +
	" & 1* green ;123: {} 123 a = 123123-_ smoothies with `~)() kale";

var slug = neatSlug(titleString);
console.log(slug); // -> green-smoothies-kale
````

Neat slug also handle Greek and other non-Anglican characters:
````javascript
console.log(neatSlug("these are umlauts: ÄËÏÖÜäëïöü")); // -> umlauts-AEIOUaeiouss
````

If all of the words in the string are stopwords, Neat Slug will still return a valid slug:
````javascript
console.log(neatSlug("the a him")); // -> the-a-him

### Credits
* Stopwords are from http://jmlr.org/papers/volume5/lewis04a/a11-smart-stop-list/english.stop