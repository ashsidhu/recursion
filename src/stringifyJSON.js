// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";

  for (var key in obj){
    value = obj[key];
    if (typeof value === 'object'){
      value = stringifyJSON(value);
    } else {
      value = '"' + value + '"';
    }
    result += '"' + key + '"' + ':' + value;
    result += ',';
  }
  if (result[result.length - 1] === ','){
    result = result.slice(0, -1);
  }
  result = "{" + result + "}";
  console.log(result);
  return result;
};