// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

// DRY'

// alert(), prompt(), confirm()

// alert('hello');
// confirm();

// console.log(toDo, 'toDo');

// toDo();

// function toDo() { // function declaration
//    console.log('to do');
// }

// console.log(toDo, 'toDo');

// toDo();


// console.log(getName, 'getName'); // Error 

// getName();//before -->  // Error 


var getName = function() { //function expression
   console.log('getName');
};

getName();//after


function sum() {
   var a = 12;
   var b = 16;
   var c = a + b;

   console.log(c, 'c-- from sum');

   function g() {

   }
}

// sum();


function moduleCandidates() {
   var candidates = [];
   

   function create() {

   }


   function update() {
   
   }
}



moduleCandidates();

// if (false) {
//    var z = 16;

//    function foo() {

//    }
// }

// console.log(z, 'z');

// console.log(foo, 'foo');

// console.log(create, 'create');
// console.log(candidates, 'candidates');

var result = null;
var z = 2222;

function sum() {
   var a = 12;
   var b = 16;

   // result = a + b; global mutatution ->> bad practice --> dity function
   // console.log(z, 'z');

   return a + b;

}
// console.log(result, 'result');

sum();

// console.log(result, 'result');


// console.log(a, 'a');
function arrayFiller(arr, rowSize, colSize) {//var arr = []; var rowSize = 10; var colSize = 5;

   if (!arr) {
      return 'arr is not defined';
   }
   
   arr = arr || [];
   rowSize = rowSize || 5;
   colSize = colSize || 5;

   for(var i = 0; i < rowSize; i++) {
      arr[i] = new Array(colSize);

      for(var j = 0; j < colSize; j++) {
         arr[i][j] = Math.round(Math.random() * 30);
      }
   }
   // console.log(arr, 'arr');

   return arr;
}

// console.log(rowSize, 'rowSize');


// alert()
// console.log(result, z);

// var bool = prompt();

// var data = arrayFiller([], 10, 5);
var z = null;

// z = arrayFiller([], 10, 5);


var res = arrayFiller();
// console.log(res, 'res');
// console.log(z, 'z');

// console.log(data, 'data');


// arrayFiller([], 5, 5);

// console.log(arr, 'arr');
// arrayFiller();
// arrayFiller();
// arrayFiller();


// function sum() {
//    // arguments = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,  10]
//    console.log([], 'arrr')
//    console.log(arguments, 'arg');

//    // for(var i = 0; i < arguments.length; i++) {
//    //    console.log(arguments[i]);
//    // }
// }

// sum([], false, null, 'Valera', 5, 6, 7, 8, 9 ,  10);





function mul(a, b) {
   return a * b;
}



var div = function(a, b) {
   return a / b;
}

function toDo(a, b, callback) { //callback = func(a, b) { return a / b}
  /*
      var callback = function(a, b) {
      return a / b;
   }
  */
   console.log(a, 'a');
   console.log(b, 'b');
   console.log(callback, 'callback');

   console.log(callback(a, b));
}

// toDo(3, 3, div);
// toDo(3, 3, sum);

// console.log(mul, 'mul');

toDo(3, 3, div);



var mul = function() {
   for (var res = 1, i = 0; i < arguments.length; i++) {
      res *= arguments[i];
   }

   return res;
};


var result = mul(1, 2, 4, 100, 25); // 1 * 2 * 4 = 8

console.log(result, 'result');

function getCentralElements(arrFirst, arrSecond) {
   var mass = [];

   for(var i = 0; i < arguments.length; i++) {
      var rem = getCutElems(arguments[i]);
      mass = mass.concat(rem);
   }

   console.log(mass, 'mass');
}

function getCutElems(arr) {
   var count = arr.length % 2 == 0 ? 2 : 1;
   var position = Math.ceil(arr.length / 2) - 1;
   var rem = arr.splice(position, count);

   return rem;
}

getCentralElements([1, 2, 3, 5, 7], [6, 12, 3, 5, 7, 9, 4, 5], [6, 2, 9, 4, 5], [1, 2, 2, 3, 5, 8]); // [3, 5, 7, 9, 2, 3]