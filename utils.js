var exports = (module.exports = {});

// Creates keys and increments a counter
// Helps determine frequency of elements to be compared later.
exports.saveKey = (obj, key) => {
  if (obj[key]) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }
  return obj;
};

// quick function to split strings separated by spaces into an array of strings
exports.splitDataBySpace = strData => strData.split(" ");

// Checks if the strings inside an array are all the same size
exports.areAllElementsSameSize = arrStrings => {
  const firstElementLength = arrStrings[0].length;
  let result = true;
  for (i = 1; i < arrStrings.length; i++) {
    if (arrStrings[i].length !== firstElementLength) {
      result = false;
      break;
    }
  }
  return result;
};

// Splits strings into bigrams: hola => ["ho","la"]
// Had to filter out empty strings added by the regExp not sure why.
exports.createBigram = (str) => {
  return (
    str.split(/(\w{2})/g)
    .filter(item => (item.length > 0))
  );
}

// Compare elements from different arrays and returns the amount of elements that are equal
// the quantitative index and the total count of the arrays.
// Comparison is at the same positions for both arrays.
exports.compareArrayElements = (arr1, arr2) => {
  const result = { equalCount: 0, totalCount: 0, qIndex: 0 };
  if (arr1.length !== arr2.length) {
    console.log("Arrays must be the same size.");
    return;
  }
  else {
    result.totalCount = arr1.length;
    arr1.forEach((arrayItem, index) => {
      if (arrayItem === arr2[index]) {
         result.equalCount += 1
      }
    });
    result.qIndex = Math.round(100 * ((2 * result.equalCount) / (arr1.length + arr2.length)));
    return result;
  }
}

// used in day 3. Helps determine the size of the fabric (array, canvas, etc.)
exports.largestValueInKey = (arrObjects, key) => {
  let largest = 0;
  let edgeLimit = 0;
  let currentValueEdgeLimit = 0;
  arrObjects.forEach((obj) => {
    let currentValue = obj[key];
    if (key === 'left') {
      currentValueEdgeLimit = currentValue + obj.width;
    }
    if (key === 'top') {
      currentValueEdgeLimit = currentValue + obj.height;
    }

    if (currentValue > largest) { largest = currentValue }
    if (currentValueEdgeLimit > edgeLimit) { edgeLimit = currentValueEdgeLimit }
  })
  return {largest, edgeLimit};
};
