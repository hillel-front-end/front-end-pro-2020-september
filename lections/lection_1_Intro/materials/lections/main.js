/*
Lection 1 - JavaScript Intro
  1. JS Введение
  2. Подключение скриптов
  3. Именование переменных
  4. Переменные + типы(String, Number),  NaN,
  5. Консоль разработчика
  6. Operators
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/

// Type
// Integer age = 25;
// Double age = 25.5;

//JS -> number 
var age = 25;
age = 30;

var a = 2;
var b = 3;

var result = a + b; // result = 2 + 3;
// console.log(result);

result = 5 - 3;
// console.log(result);

result = 10 * 5;
// console.log(result);

result = 10 / 5;
// console.log(result);

result = 13 % 2;
// console.log(result);

var a = 1;
var b = 2;
var c = 3;
var result = 0

result = (a + b) * c;
// console.log(result);

result = a + b * c;
// console.log(result);

// Type: String -> '' ""
// String name = "Valera";

var name = 'Valera';

var a = 'Front';
var c = 'end';
var b = 'Basic';

var result = a + b + c;
// console.log(result);

var f = '12';
var g = '15';

var result = f + g;

// console.log(result, 'result --> type string'); // '1215'


// ----------- Явное преообразование типа: -----------------
// result = +result;
// console.log(+result, 'result --> type number');

j = result + 10;

// console.log(j, 'j');

var b = '1111';
result = parseInt(b);
// console.log(result, 'result after parseInt');

var personInfo = '17 Valera 12';
var personInfoSecond = 'a17 Valera 12';
// console.log(+personInfo);// NaN - Not a Number

// console.log(parseInt(personInfo), 'parseInt --> personInfo')
// console.log(parseInt(personInfoSecond), 'personInfoSecond');

// parseInt(personInfo) -> 17

//Неявно преообразование типа:

var a = '12';
var b =  '1';

var result = a + b; //concat

console.log(result, 'result a + b')

result = a * b;

console.log(result, 'result a * b')

result = a - b;

console.log(result, 'result a * b')

result = a / b;
console.log(result, 'result a * b')

result = 12 * '10';
console.log(result, 'mul');

result = 12  + '10';
console.log(result, 'sum concat');