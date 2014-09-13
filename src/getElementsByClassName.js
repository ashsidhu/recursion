// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Question: Are we allowed to add custom parameters to definitions?
var getElementsByClassName = function(className, rootNode){
  var results = [];
  var rootNode = rootNode || document;
  if (nodeHasClass(rootNode, className)){
    results.push(rootNode);
  }

  var childNodes = rootNode.childNodes;
  for (var i = 0; i < childNodes.length; i ++){
    var nodesWithClass = getElementsByClassName(className, childNodes[i]);
    if (nodesWithClass.length > 0){
      results.push(nodesWithClass);
    }
  }

  // If life was easy, we could just do things the easy way:
  // return _.flatten(results);
  return flatten(results);
};

var nodeHasClass = function(node, className){
  if (node.nodeType === 1){
    return node.className.indexOf(className) > -1;
  } else {
    return false;
  }
};

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