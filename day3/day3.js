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
  console.log(leftMostStartOfClaim)
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
    let claimTop = claim.top;
    let claimLeft = claim.left;
    let claimWidth = claim.width;
    let claimHeight = claim.height;

    for (i = claimTop; i < claimTop + claimHeight; i++) {
      for (j = claimLeft; j < claimLeft + claimWidth; j++) {
        let currentPosition = result[i][j];
        if (currentPosition !== '.') {
          result[i][j] = 'X';
        }
        else {
          result[i][j] = claim.id;
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

const result = countOverlaps(claimsFilled);
console.log(result);