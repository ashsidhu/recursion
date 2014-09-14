// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Question: Are we allowed to add custom parameters to definitions?
var getElementsByClassName = function(className, rootElement){
  var results = [];
  var rootElement = rootElement || document.body;
  if (elementHasClass(rootElement, className)){
    results.push(rootElement);
  }

  var childElements = rootElement.childNodes;
  for (var i = 0; i < childElements.length; i ++){
    var elementsWithClass = getElementsByClassName(className, childElements[i]);
    if (elementsWithClass.length > 0){
      results.push(elementsWithClass);
    }
  }

  // If life was easy, we could just do things the easy way:
  // return _.flatten(results);
  // But instead we're going to implement it from scratch:
  return flatten(results);
};

var elementHasClass = function(element, className){
  if (element.nodeType === 1){
    return element.classList.contains(className);
  } else {
    return false;
  }
};

// another recursive function
var flatten = function(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};