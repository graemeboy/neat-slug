var textFilter = require('./textFilter');
var anglicize = require('./anglicize');

module.exports = function (textIn) {
	var filteredArray = textFilter(textIn),
		slugText;
	if (filteredArray.length === 0)
		slugText = textIn.replace(/ /g, '-');
	else
		slugText = filteredArray.join('-');
	return anglicize(slugText);
}