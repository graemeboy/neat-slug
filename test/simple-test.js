/**
 * Sample tests
 * No unit tests, but just some output to look at.
 */

// Require the slugger
var slugger = require('../index.js');

// Simple example
console.log(slugger("Oh what a wonderful world!"));
// Returns "wonderful-world"

// More realistic example
console.log(slugger("How to lose a guy in ten days"));
// Returns "lose-guy-ten-days"

// More complex test:
console.log(slugger("123 1 2 3 @This., -34/ 1234 #! 90182.2312 $ % ^ & 1* green ;123: {} 123 a = 123123-_ smoothies with `~)() kale"));

// Complex test
console.log(slugger("123 1 2 3 @This., -34/ i124s #! 1231a324n $ % ^ & 1* exa2123mple ;123: {} of123 a = 123123-_ string with `~)() punctuation"));
// Returns "i124s-1231a324n-exa2123mple-of123-string-punctuation"