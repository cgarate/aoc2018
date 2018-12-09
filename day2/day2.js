
const data = require('./day2_data');
const utils = require('../utils');

const day2Data = utils.splitDataBySpace(data.data);
const checksum = { totalA: 0, totalB: 0 };

const calculateCharFrequency = (data) => {
  const arrCharCount = [];
  data.forEach((string) => {
    var tempObj = {}
    for (var s of string) {
      utils.saveKey(tempObj, s)
    }
    arrCharCount.push(tempObj);
  });
  return arrCharCount;
}

const arrCharFreq = calculateCharFrequency(day2Data);

const calcChecksumTotals = (arrFreq, checkSums, keyName, frequencyNumber) => {
  arrFreq.forEach((charCountObj) => {
    for (key in charCountObj) {
      if (charCountObj[key] === frequencyNumber) {
        utils.saveKey(checkSums, keyName);
        break;
      }
    }
  })
}

calcChecksumTotals(arrCharFreq, checksum, 'totalA', 2);
calcChecksumTotals(arrCharFreq, checksum, 'totalB', 3);

console.log(checksum.totalA, checksum.totalB);
console.log(checksum.totalA * checksum.totalB);

const findClosestStrings = (data) => {
  const result = {};
  let foundClosestStrings = false;
  for (i=0; i < data.length; i++) {
    bigramA = utils.createBigram(data[i]);
    for (j=i+1; j < data.length; j++) {
      bigramB = utils.createBigram(data[j]);
      let qIndex = utils.compareArrayElements(bigramA, bigramB);
      if (qIndex.qIndex === 92) {
        result.stringA = data[i];
        result.stringB = data[j];
        result.indexA = i;
        result.indexB = j;
        foundClosestStrings = true;
        break;
      }
    }
    if (foundClosestStrings) {
      break;
    }
  }
  return result;
}

console.log(findClosestStrings(day2Data));
