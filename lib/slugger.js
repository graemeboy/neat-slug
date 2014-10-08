var textFilter = require('./textFilter');
var anglicize = require('./anglicize');

module.exports = function (textIn) {
	return anglicize(textFilter(textIn).join('-'));
}