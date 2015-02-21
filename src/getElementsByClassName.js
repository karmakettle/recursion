// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var childNodes = document.body.childNodes;
	var result = [];
	if (document.body.classList.contains(className)) {
		result.push(document.body);
	}

	function classRecurse(nodes)	{
		var innerResult = [];
		for (var i=0; i<nodes.length; i++) {
			var classList = nodes[i].classList;
			if (classList === undefined) { continue; }
			if (classList.contains(className)) {
				innerResult.push(nodes[i]);
			}
			innerResult = innerResult.concat(classRecurse(nodes[i].childNodes));
		}
		return innerResult;
	};
	return result.concat(classRecurse(childNodes));
};
