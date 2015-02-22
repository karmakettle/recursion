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

  var numberOfCommas = function(closeBracketIdx) {
    var numCommas = 0;
    var listSlice = json.slice(0, closeBracketIdx);
    for (var i=0; i<listSlice.length; i++) {
      if (listSlice[i] === ",") {
        numCommas += 1;
      }
    }
    return numCommas;
  }

  if (json[0] === '[') {
    var result = [];
    var startQuoteIdx = 2;
    var endQuoteIdx = json.indexOf("\"", startQuoteIdx + 1);
    var closeBracketIdx = json.indexOf("]");
    var numCommas = numberOfCommas(closeBracketIdx);
    for (var i=0; i <= numCommas; i++) {
      result.push(json.slice(startQuoteIdx, endQuoteIdx));
      startQuoteIdx = json.indexOf("\"", endQuoteIdx + 1) + 1;
      endQuoteIdx = json.indexOf("\"", startQuoteIdx + 1);
    }
    return result;
  }
};
