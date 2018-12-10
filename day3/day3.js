arrData = require('./day3_data');
utils = require('../utils');

const arrayDataTest = { data: [
  { id: 1, left: 1, top: 3, width: 4, height: 4 },
  { id: 2, left: 3, top: 1, width: 4, height: 4 },
  { id: 3, left: 5, top: 5, width: 2, height: 2 },
]};

// arrData = arrayDataTest;

const sizeOfWholePieceOfFabric = (arr) => {
  const leftMostStartOfClaim = utils.largestValueInKey(arr, 'left');
  const bottomMostStartOfClaim = utils.largestValueInKey(arr, 'top');

  return {
    arrayNumberOfColumns: leftMostStartOfClaim.edgeLimit,
    arrayNumberOfRows: bottomMostStartOfClaim.edgeLimit,
    leftMostStartOfClaim: leftMostStartOfClaim.largest + 1,
    bottomMostStartOfClaim: bottomMostStartOfClaim.largest + 1,
  }
}

const createPieceOfFabric = (columns, rows) => {
  wholePieceOfFabric = [];
  const arrayRow = Array(columns).fill('.');
  for (i=0; i < rows; i++) {
    wholePieceOfFabric.push(arrayRow.slice());
  }
  return wholePieceOfFabric;
}

sizeOfFabric = sizeOfWholePieceOfFabric(arrData.data)

console.log(sizeOfFabric);
theFabric = createPieceOfFabric(sizeOfFabric.arrayNumberOfColumns, sizeOfFabric.arrayNumberOfRows);

const fillInClaims = (theFabric, arrData) => {
  const result = theFabric.slice();

  arrData.forEach((claim) => {
    const { top, left, width, height, id } = claim
    for (i = top; i < top + height; i++) {
      for (j = left; j < left + width; j++) {
        let currentPosition = result[i][j];
        if (currentPosition !== '.') {
          result[i][j] = 'X';
        }
        else {
          result[i][j] = id;
        }
      }
    }
  })
  return result;
}

claimsFilled = fillInClaims(theFabric, arrData.data);

const countOverlaps = (claims) => {
  const result = claims.reduce((acc, row) => {
    return acc += row.filter((point => (point === 'X'))).length;
  }, 0)
  return result;
}

const findSingleNonOverlapping = (claims, arrData) => {
  let nonOverlappedId = "";
  arrData.forEach((claim) => {
    const {id, height, width } = claim;
    const result = claims.reduce((acc, row) => {
      return acc += row.filter((point => (point === id))).length;
    }, 0)
    if (result === (height * width)) {
      nonOverlappedId = id;
    }
  })
  return nonOverlappedId;
}

const answerPartOne = countOverlaps(claimsFilled);
const answerPartTwo = findSingleNonOverlapping(claimsFilled, arrData.data);
console.log(answerPartOne, answerPartTwo);