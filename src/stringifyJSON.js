// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //note to self: special characters dictionary: []{},"
  result = '';
  if (typeof obj === "number" || typeof obj === "boolean") {
  	result += obj;
  }
  else if (obj === null) {
  	return "null";
  }
  else {
	  result += stringifyJSON(obj.slice(1));
	}
  return result;
};
