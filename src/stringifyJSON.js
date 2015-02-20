// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //note to self: special characters dictionary: []{},"
  var result = "";
  if (typeof obj === "number" || typeof obj === "boolean") {
  	result += obj;
  }
  else if (obj === null) {
  	return "null";
  }
  else if (typeof obj === "string") {
  	//for one-letter strings
  	if (obj.length === 1 && arguments[1] === undefined) {
  		return "\"" + obj + "\"";
  	}
  	//base case for recursion
  	if (obj.length === 1) {
  		return obj[0] + "\"";
  	}
  	//recursive portion
  	result += obj[0];
	  result += stringifyJSON(obj.slice(1), "placeholder");

	  //little hack to make sure a quotation mark is added after recursion
	  if (arguments[1] === undefined) {
	  	result = "\"" + result;
	  }
	}
	else if (Array.isArray(obj)) {
		result += "[";
		for (var i=0; i<obj.length; i++) {
			result += stringifyJSON(obj[i]);
			if (i !== obj.length - 1) {
				result += ",";
			}
		}
		result += "]";
	}
	else {
		result += "{";
		for (key in obj) {
			result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
		}
		result += "}";
	}
  return result;
};
