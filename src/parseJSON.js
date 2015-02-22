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
    var closeBracketIdx = json.indexOf("}");
    var numCommas = numberOfCommas(closeBracketIdx);
    var lastQuoteIdx = -1;
    var i = 0;
    do {
      var startQuoteIdx = json.indexOf("\"", lastQuoteIdx + 1);
    	var nextQuoteIdx = json.indexOf("\"", startQuoteIdx + 1);
    	var nextItemIdx = nextQuoteIdx + 3;
      if (json[nextItemIdx] === "\"") {
      	lastQuoteIdx = json.indexOf("\"", nextItemIdx + 1);
        var key = json.slice(startQuoteIdx + 1, nextQuoteIdx);
        var val = json.slice(nextItemIdx + 1, lastQuoteIdx);
      }
      result[key] = val;
      i += 1;
    } while (i <= numCommas);

  	return result;
  }

  function numberOfCommas(closeBracketIdx) {
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
    var closeBracketIdx = json.indexOf("]");
    var numCommas = numberOfCommas(closeBracketIdx);
    var nextItem = json[1];
    var endQuoteIdx = -1;
    var commaIdx = -1;

    for (var i=0; i <= numCommas; i++) {
      if (nextItem === "n") {
        var item = null;
      }
      else if (nextItem === "t") {
        var item = true;
      }
      else if (nextItem === "f") {
        var item = false;
      }
      else {
        var startQuoteIdx = json.indexOf("\"", endQuoteIdx + 1);
        var endQuoteIdx = json.indexOf("\"", startQuoteIdx + 1);
        var item = json.slice(startQuoteIdx + 1, endQuoteIdx);
      }
    
      result.push(item);
      commaIdx = json.indexOf(",", commaIdx + 1);
      nextItem = json[commaIdx + 1];
    }
    return result;
  }
};