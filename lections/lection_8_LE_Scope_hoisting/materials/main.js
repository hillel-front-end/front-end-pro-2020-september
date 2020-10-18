console.log(foo, 'foo');

foo();

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

var foo2 = function() {
    console.log(g, 'g --> local');
    var g = 15;     
};

// foo2();

// console.log(g, 'g --> global');

// console.log(z, 'z');

if (false) {
    var z = 12;
}

// console.log(z, 'z');



foo();

function foo() {
    console.log('foo declaration');
}

foo();



// --------- Lexical Environment -----------


