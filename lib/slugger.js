var textFilter = require('./textFilter');

module.exports = function (textIn) {
	return textFilter(textIn).join('-');
}