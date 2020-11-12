var goods = [
    { name: 'juice', price: 100, isBougth: false },
    { name: 'cola', price: 82, isBougth: true },
    { name: 'sprite', price: 50, isBougth: false },
    { name: 'sprite', price: 30, isBougth: true },
    { name: 'sprite', price: 70, isBougth: true }
];



/* 
for (var i = 0, size = goods.length; i < size; i++) {
    console.log(goods[i])    
}

*/


// goods.forEach(function (item, index) {
//     console.log(item, index, this, 'item, index, original');
// });

// var array = goods.map(function (item, index) {
//     return [item.name, item.proice];
// });

var MAIN_CURRENCY = 'UAH';

// var array = goods.map(function (item, index) {
//     return {
//         name: item.name,
//         price: item.price + MAIN_CURRENCY
//     }
// });

// console.log(array, 'array');

// var array = goods.filter(function (item, index) {
//     return !item.isBougth;
// });

// var array = goods.filter(function (item, index) {
//     return item.price >= 100;
// });


// console.log(array, 'array');x


// var boolean = goods.some(function (item) {
//     return item.price > 50;
// });

// var boolean = goods.every(function (item) {
//     return item.price > 50;
// });


// console.log(boolean, 'boolean');
//reduce --> HW ?

const bool = goods
    .filter(item => item.price > 40)
    .map(item => item.name)
    .some(item => item === 'cola');


// const filteredGoods = goods.filter(item => item.price > 40);
// const goodsNames = filteredGoods.map(item => item.name);
// const isExistCola = goodsNames.some(item => item === 'cola')


// console.log(bool, 'bool');
// function forEach(callback) {
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i], i, this);// currentItem, index, originalArray
//     }
// }






/*------------------ ECMASCRIPT - 6 -------------------- */

// ---------- 1 - (let, cosnt) -----------
// for, while, do-while, if, switch

// if (false) {
//     var z = 12;
// }

// console.log(z, 'z');


{
    var a = 12;
    // let b = 13;
}


if (false) {
    let b = 19;
}

// console.log(h, 'h'); --> error

let h = 12;

// let h = 18; ->  error

// console.log(h, 'h');

h = 25;

// console.log(h, 'h');
// console.log(b, 'b');
// console.log(a, 'a');


// for (let i = 0; i < 5; i++) {
//     console.log(i, 'outside timeout'); // window.i == 5
//     setTimeout(function () {
//         console.log(i, 'i timeout');
//     }, 1000);
// }

// ------ const -------------

const PI = 3.14;
const MAX_SUM = 20;

// k = 15;

// MAX_SUM = 111;

// console.log(MAX_SUM, 'MAX_SUM');

const person = {
    name: 'Valera'
};

person.name = 'Pety';

// console.log(person, 'person');

// person = {
//     name: "Pety"
// }

const user = Object.freeze({
    foo: '123'
});

user.foo = 'aaaaa';


// console.log(user, 'user');



// console.log(obj, 'obj')

// const toDo = function () {
//     console.log('todo')  
// };

// toDo();

// var toDo = function () {
//     console.log('another todo');    
// }

// toDo();
// toDo();


// ======== arrow function ========

/*
() => {

}

// */
// var this = {}

const obj = {
    name: 'aaa'
};

// const sum = (a, b) => {
//     // console.log(arguments, 'args');
//     console.log(this, 'this');
//     return a + b;
// };



const sumPlusOne = a => a + 1;


function toDo() {
    // const sum = (a, b) => {
    //     console.log(this, 'this');
    //     // console.log(arguments, 'args');
    //     return a + b;
    // };

    sum(6, 7);
}


// toDo();
// toDo.call(obj);



// let result = sum(1, 2);

// result = sumPlusOne(10);

// console.log(result, 'result');


// ====== default params ===



function div(a = 10, b = 2) {
    // b = b || 2;

    return a / b;
}



const resultDiv = div(50, 5);

console.log(resultDiv, 'resultDiv');


// ======= object ========
const first = 'first';
const next = 'Name';


const KEY_FOR_NAME = 'foo';


const person2 = {
    lastName: 'Petrov',
    run() {
        console.log(this.name, ' is running');
    },
    [first + next]: 'hhhh',
    [KEY_FOR_NAME]: 'valera'

}


console.log(person2, 'person2');

person2.run();

const key = 'name';

// console.log(person2[key], 'person2[key];');
// console.log(person2[KEY_FOR_NAME], 'KEY_FOR_NAME');