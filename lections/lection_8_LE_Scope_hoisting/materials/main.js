// console.log(foo, 'foo');

// foo();

// function toDo(a, b, callback) {
//     console.log(callback, 'callback');
// }

// toDo(1, 2, foo);


// console.log(a, 'before');

// var a = 12;     

// console.log(a, 'after');


// console.log(foo2, 'foo2');

// foo2();

// var g = 18;

// var foo2 = function() {
//     console.log(g, 'g --> local');
//     g = 15;     
// };

// foo2();

// console.log(g, 'g --> global');

// console.log(z, 'z');

// if (false) {
//     var z = 12;
// }

// console.log(z, 'z');



// foo();

// function foo() {
//     console.log('foo declaration');
// }

// foo();



// --------- Lexical Environment -----------
var c = 12;

console.log(window, 'window');


// var g = 18;
var a = 16;

// window -- global scope
// window = {a: 16}

var foo2 = function() {
    //LE = {a: undefined, c3: function(){}}

    console.log(a, 'a'); //undefined

    var a = 15;     

    //LE = {a: 15, c3: function(){}}

    console.log(a, 'a');


    function c3() {

    }
};

// foo2();

// console.log(c3, 'c3');
// console.log(a, 'a')
// console.log(g, 'g --> global');


// SCOPE
var name = 'Valera';

function toDo(m) {
    // LE-toDo = {m: undefined, f: undefined, scope: window}
    // h = 16;
    var f = 15;

    console.log(name, 'name');

    // LE-toDo = {m: undefined, f: 15, scope: window}


    // console.log(f, 'f'); // LE-toDo.scope.f

    // f = 15;
    // console.log(f, 'f'); //LE-toDo.f

    // LE = null;

    // [[Scope]] -> window
}

toDo();


// console.log(b);
// console.log(window.h, 'window.h');


var a = 1;

// window = {a: 3}

function c1() {
    var a = 16;
    // LE-C1 = {scope: window, c2: function(){}, a:16}

    function c2() {
        // LE-C2 = {scope: LE-C1}
        var a = 3;

        // LE-C2 = {scope: LE-C1}

        console.log(a, 'a'); // LE-C2.scope.a

           //[SCOPE] -> LE-C1
    }

    // LE-C1 = {scope: window, c2: function(){}, a: 16}
    c2();
    // LE-C1 = {scope: window, c2: function(){}, a: 3}

    //[SCOPE] -> window
 }


 c1();