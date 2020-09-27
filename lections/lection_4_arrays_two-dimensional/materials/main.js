/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/



var arr = [];
arr.length = 5;

var mass = new Array(5, 5);

console.log(arr, 'arr');
console.log(mass, 'mass');


var twoDem = [
  [1, 2, 3]
];

console.log(twoDem[0][1])

for(var i = 0, size = 5; i < size; i++) {
  twoDem[i] = new Array(size);

  for(var j = 0; j < size; j++) {
    twoDem[i][j] = Math.round(Math.random() * 60);
  }
}

console.log(twoDem, 'before swap');
var minI = 0;
var maxI = 0;
var sumMin;
var sumMax;

for(var i = 0, size = twoDem.length; i < size; i++) {
  for(var j = 0, sum = 0; j < twoDem[i].length; j++) {
    sum += twoDem[i][j];
  }

  console.log(sum, 'sum');

  if (i === 0) {//Гипотиза
    sumMin = sum;
    sumMax = sum;
    continue;
  }


  if (sum < sumMin) {
     sumMin = sum;
     minI = i;
  }

  if (sum > sumMax) {
    sumMax = sum;
    maxI = i;
  }
}

console.log(minI, 'minI');
console.log(sumMin, 'sumMin');

console.log(maxI, 'maxI');
console.log(sumMax, 'sumMax');


var swap = twoDem[minI];
twoDem[minI] = twoDem[maxI];
twoDem[maxI] = swap;

console.log(twoDem, 'after swap');
