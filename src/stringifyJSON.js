// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // obj --> string
  if (obj === null || obj === Infinity || obj === NaN) {
    return 'null';
  }

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }

    var resultArr = [];
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === "function" || typeof obj[i] === "undefined") {
        resultArr.push(obj[i] === "null");
      }

      resultArr.push(stringifyJSON(obj[i]));
      }

    return '[' + resultArr.toString() + ']';
  }

  if (typeof obj === "object") {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }

    var propertyArr = [];
    for (var key in obj) {
      if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {
        return '{}';
      }

      propertyArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + propertyArr.toString() + '}';
  }
};
