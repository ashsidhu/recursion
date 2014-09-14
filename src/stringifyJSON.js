// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  
  // cases: objects, arrays and null
  if (typeof obj === 'object'){
    var result = "";
    if (obj === null){
      result += obj;
    } else if (Array.isArray(obj)) {
      // arrays
      for (var i = 0; i < obj.length; i++){
        value = stringifyJSON(obj[i]);
        result += value + ',';
      }

      if (result[result.length - 1] === ','){
        result = result.slice(0, -1);
      }

      result = '[' + result + ']';
    } else {
      // objects
      for (var key in obj){
        value = obj[key];

        if (typeof value !== 'function' && typeof value !== 'undefined'){
          value = stringifyJSON(value);
          result += '"' + key + '"' + ':' + value + ',';
        }
      }
      
      if (result[result.length - 1] === ','){
        result = result.slice(0, -1);
      }
      
      result = '{' + result + '}';
    }
    return result;
  } else if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (typeof obj === 'function'){
    return undefined;
  } else {
    return undefined;
  }
};