// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //note to self: special characters dictionary: []{},"
  var result = "";
  if (typeof obj === "number" || typeof obj === "boolean") {
  	result = "" + obj;
  	return result;
  }
  else if (obj === null) {
  	return "null";
  }
  else if (typeof obj === "string") {
  	if (obj.length === 1) {
  		return obj[0] + "\"";
  	}
  	result += obj[0];
	  result += stringifyJSON(obj.slice(1), "placeholder");
	  if (arguments[1] === undefined) {
	  	result = "\"" + result;
	  }
	}
	else if (Array.isArray(obj)) {
		if (obj.length === 0) {
			return "[]";
		}
		if (obj.length === 1 && arguments[1] === undefined) {
			result += obj[0] + "]";
		}
		else{
			result += obj[0] + ", "
			result += stringifyJSON(obj.slice(1), "placeholder");
		}
		if (arguments[1] === undefined) {
			result = "[" + result;
		}
	}
  return result;
};
