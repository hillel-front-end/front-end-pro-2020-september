/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
 * 
 * Практика:
  - min, max (10 - 20),
*/


/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

var team = ['g', 'a', 'b', 'c'];

console.log(team, 'team');
console.log(team[0], '0');//team[0] --> always first
console.log(team[1], '1');
console.log(team[2], '2');
console.log(team[3], '3');
console.log(team[4], '4');
console.log(team, 'team before');
// team[5] = 'z';
console.log(team, 'team after');
console.log(team[5], '5');


console.log(team.length, 'len');
// team.length = 1000;
// team[666] = 1000;
console.log(team[team.length - 1], 'team[team.length - 1]');

team[team.length] = 'gggggg';
team[team.length] = 'aaaaa';

// team.length = 11;
console.log(team, 'team');

// team[team.length] = '111111111';

// console.log(team, 'team');

// team[team.length] = '222222';

// console.log(team, 'team');

// team.length = team.length - 1;

// console.log(team[team.length / 2], 'team');

for(var i = 0; i < team.length; i++) {
  console.log(team[i], 'i')
}

var data = [];

for(var i = 0, size =  data.length; i <= size; i++) {
  data[data.length] = '1';

  console.log(data.length, 'length');
}

// console.log(a, 'a');

console.log(Math.ceil(4.5))
console.log(Math.round(4.3));
console.log(Math.round(4.5));


// Math.random() * (max - min) + min;

var max = 10;
var min = 60;
var random = Math.random() * (max - min) + min;

console.log(Math.round(random), 'random');

arr = []

arr.length = 10;

for(var i = 0, size = arr.length; i < size; i++) {
  arr[i] = Math.round(Math.random() * (max - min) + min);
}

console.log(arr, 'arr');