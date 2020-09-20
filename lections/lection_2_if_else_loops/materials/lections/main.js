/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/

// ------- Повторение ----------

 var res = 1 + '2';
 res = '12' * '0';


 console.log(res, 'res');

 var a = 12

/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/




// ------------- null, undefined ------------

// console.log(foo);
//var foo; var foo = undefined;
// foo = 12;

// console.log(foo, 'foo');

// foo = null;

// var foo2 = null;

// console.log(+null, 'null');
// console.log(+undefined, 'undefined');

// ------------- comments ----------------

// some text


/*
sda
asd
sd
asd
asd
*/

// ------------- typeof -----------------

//Integer age = 12;
var age = 12;

console.log(typeof age, 'age');

age = 'Valera';

console.log(typeof age, 'age');


// ------------ var -----------------


// ------------- smart operation  ----------

var counter = 0;

counter = counter + 1; // 0 + 1
counter = counter + 1;// 1 + 1
counter += 1; //counter = counter + 1
counter++; // counter += 1;
counter++;
counter--;
++counter;

// res = +'123';// 123

// console.log(counter, 'counter before');

// res = counter++;

// console.log(res, 'res');
// console.log(counter, 'counter after');

console.log(counter, 'counter before');

res = counter++;

console.log(res, 'res');
console.log(counter, 'counter after');
// ============ Boolean [true, false] ===============

var bool = true;
var boolSecond = false;


console.log(+true, '+true');
console.log(+false, '+false');

console.log(true + 'abc');
console.log(false + 'abc');

console.log(true - ''); // 1 - 0
console.log(false - ''); //0 - 0
console.log(true + true); // 1  + 1


/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/

// bool = Boolean(111);
// console.log(bool, 'bool');
bool = Boolean('');
console.log(bool, 'empty str');

bool = Boolean(null);
console.log(bool, 'null');

bool = Boolean(undefined);
console.log(bool, 'undefined');

bool = Boolean(NaN);
console.log(bool, 'NaN');

bool = Boolean(0);
console.log(bool, '0');

bool = Boolean('a');
console.log(bool, 'bool');



// ------------- Logical operators [>,<, >=, <=, ==, ====, !] -----------------------
 






// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 
*/






/*
    var conditional;

    if (conditional) {
        при условие (conditional == true) => выполняеится тело if() {}
    } else {
        при условие (conditional == false) => выполняеится тело else {}
    }
*/



/*
    if (условие) {
       тело условия if
    } else if(условие) {
       тело условия else-if
    } else {
        тело условия else
    }

    if (условие) {
        тело условия if
    } else if(условие) {
         тело условия else
    }
*/

 // ============ Loops ===============


 /* 
    while(условие) {
        блок кода
    }
*/


/* 
    do {
        блок кода
    } while(условие)
*/


/* 
 // for(1;2;3){
//     4
// }

1 - зона переменных
2 - зона условия выполнеия\выхода из цикла
3 - зона увеличения счетчика 
4 - зона выполнения тела цикла(если зона 2 == true)

*/