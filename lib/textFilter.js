/**
 * An array of words such as "the" and "an", which
 * will never be used as Twitter hashtags.
 */
var stopWords = require('./stopwords');

/**
 * An array of words that could be Twitter hashtags
 * String []
 */
 var words;

/**
 * Takes in a string, removes all filter words, numbers,
 * and other expressions that will not be used in this process.
 * 
 * @param  String str, the string to be filtered
 * @return String [] words, the filtered set of words that could be
 * used as Twitter hashtags
 */
function filterText(str) {
	// Make sure that the string is not empty
	if (typeof str != 'string' || str.trim() === '')
		return [];

	// Remove punctuation from input string, and split it into words.
 	words = removePunctuation(str).split(/\s/);
 	// Prune digits and stopwords, return result.
	return pruneWords(words);
}

function pruneWords (words) {
	// Loop through the words to prune digits
	for (var i = 0; i < words.length; i++) {
		// Check if this word is either a digit, or in our list of stopwords
		if (isDigit(words[i]) ||
			stopWords.indexOf(words[i].toLowerCase()) !== -1)
			// Remove the word
			words.splice(i--,1);
	}
	return words;
}

/**
 * Takes in a string, and returns it without any
 * punctuation marks.
 *
 * Expanded on Mike Grace's Stackoverflow response (added '@'):
 * 	http://stackoverflow.com/a/4328722/126320
 * @return String str
 */
function removePunctuation(str) {
	//  Remove  links, periods, commas, semi-colons, etc.
	var punctuationless = str.replace(/[\.,-\/#!$@%\^&\*;:{}=\-_`~()]/g,"");
	return punctuationless.replace(/\s{2,}/g," ");
}

/**
 * Takes in a string, and returns true if it is a digit
 * 
 * @param  String str to test
 * @return Boolean isDigit
 */
function isDigit(str) {
	// Find a digit in the string.
	var findDigit = str.match(/\d/g);
	// Return true if the entire string is a number (number are fine within strings.)
    return (findDigit && findDigit.length === str.length);
}

exports.filterText = filterText;