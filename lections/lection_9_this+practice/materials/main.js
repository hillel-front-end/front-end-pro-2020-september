

// test

//https://docs.google.com/document/d/10Vtwf5aeSNBBi23NCCdAr84E1hQByBx4zhcLs9zRc08/edit
// var a = 1; 


// function b() { 
//     //LE-b = {a: 10, scope: window}
//     a = 10; 


//     return; 
//     function a() {} 
// } 


// b(); 
// alert(a);


// function makeFruit(basket) {
// // LE = {basket: [ "Apple" ], scope: window}
//     basket = [ "Apple" ];
// }
// var fruits = [];
// makeFruit(fruits);
// console.log( fruits[0] ); 


// (function() {
//     // LE = {scope:  window}
// 	f();// ? 2

// 	f = function() {
// 		console.log(1);
// 	}
// })()

// function f() {
// 	console.log(2)
// }

// f(); // 1

// -------------------- замыкание ----------------


function init() {
    
    // var count = 0;
    // LE-Init = {count: 0, scope: window}
    return function() {
        // LE = {count: 0, scope: LE-Init}
        var count = 0;
        console.log('hello', ++count);

        //[[SCOPE]] => LE-Init
    }

    //LE-Init  = null
}


var counter = init();

init = null;
// init(); // error

// console.log(counter, 'counter');

// counter();
// counter();
// counter();
// counter();
// counter();
// counter();



function initSlider(collection) {
    var index = 0;

    function next() {
        console.log(collection[index++]);
    }


    function previous() {
        console.log(collection[--index]);
    }

    return {
        next: next,
        previous: previous
    }   
}

var config = initSlider(['pic-1', 'pic-2', 'pic-3']);

console.log(config, 'config');

// config.next();
// config.next();
// config.next();
// config.previous();

/// ---------------- this -----------------



function toDo() {

}


toDo();

// console.log(window, 'toDo');


var personFirst = {
    firstName: 'Valera',
    lastName: 'Ternvskiy'
};

var personSecond = {
    firstName: 'Pety',
    lastName: 'Petrov'
};

function getFullName() {
    console.log(this, 'this');

    // this
    return this.firstName + ' ' + this.lastName;
}

personFirst.getFullName = getFullName;
personSecond.getFullName = getFullName;

// console.log(personFirst, 'personFirst');
// console.log(personSecond, 'personSecond');

console.log(personFirst.getFullName(personFirst));
console.log(personSecond.getFullName(personSecond));

// console.log(getFullName());

function z() {
    getFullName();
}

z();

//window = {i: 12}
// var i = 12;

// function a() {
//     // LE = {scope: window}
//     console.log(i, 'i');

//     //[[SCOPE]] -> window
// }


// function b() {
//     // LE = {scope: window, i: 1}
//     var i = 1;

//     a();
// }

// b();