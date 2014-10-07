var hashtags = require('../index.js');

console.log("Running first test");

// Simple punctuation
//console.log(hashtags.filterText("Hello world!"));

// Simple punctuation and number
//console.log(hashtags.filterText("123, 1, 1231243, ,324234 @!! 1E3Hello world!"));

// Punctuation test:
console.log(hashtags.filterText("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"));
// Numbers test
console.log(hashtags.filterText("123 1 2 3 @This., -34/ i124s #! 1231a324n $ % ^ & 1* exa2123mple ;123: {} of123 a = 123123-_ string with `~)() punctuation"));