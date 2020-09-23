/*
  Задача - 3. Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
       Если число равно нуля, то игнорируем его.
   *   В массиве A найти min - значение, и max - значение. Min - max поменять местами.

*/

var data = []
var min = -5;
var max = 5;
var A = [];
var B = [];

for (var i = 0; i < 30; i++) {
  var random = Math.round(Math.random() * (max - min) + min);
  data[data.length] = random;

    if(random > 0) {
      A[A.length] = random;
    }

    if (random < 0) {
      B[B.length] = random;
    }

}


console.log(data, 'data');
console.log(A, "A");
console.log(B, 'B');

min = A[0];
max = A[0];

minI = 0;
maxI = 0;

for(var i = 1, size = A.length; i < size; i++) {
  if (min >= A[i]) {
      min = A[i];
      minI = i;
  }

  if (max <= A[i]) {
      max = A[i];
      maxI = i;
  }
}

console.log(min, 'min');
console.log(minI, 'minI');

console.log(max, 'max');
console.log(maxI, 'maxI');

temp = A[minI];
A[minI] = A[maxI];
A[maxI] = temp;

console.log(A, 'A');




