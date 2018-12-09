
const arrayIterationResults = [];
const objFrequencies = {};
const arrayFirstTwice = [];

const aoc1 = (arrFrequencies, start ) => {
  const result = arrFrequencies.reduce((acc, frequency) => {
    saveKey(objFrequencies, acc);
    isSavedKeyValueGTOne = objFrequencies[acc] > 1;
    if (isSavedKeyValueGTOne) {
      arrayFirstTwice.push(acc);
    }
    return acc += frequency;
  }, start)
return {result, objFrequencies}
}

const checkObjectValues = (obj) => {
  return Object.entries(obj)
  .filter((keyValuePair) => {
    return keyValuePair[1] === 2
  })
}

iterateNTimes = (times) => {
  let startFrequency = 0;

  for (i=0; i <= times; i++) {
    const result = aoc1(dataFrequencies, startFrequency);
    startFrequency = result.result;
    arrayIterationResults.push(startFrequency)
  }
}

iterateNTimes(137);
console.log('First Frequency to come twice: ', arrayFirstTwice[0]);





