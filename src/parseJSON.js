// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === '[]') {
  	return [];
  }
  if (json === '{}') {
  	return {};
  }
  if (json[0] === '{') {
  	var result = {};
  	var nextQuoteIdx = json.indexOf("\"", 2);
  	var thirdQuoteIdx = json.indexOf("\"", nextQuoteIdx + 1);
  	var lastQuoteIdx = json.indexOf("\"", thirdQuoteIdx + 1)
  	var key = json.slice(2, nextQuoteIdx);
  	var val = json.slice(thirdQuoteIdx + 1, lastQuoteIdx);
  	result[key] = val;
  	return result;
  }
};
