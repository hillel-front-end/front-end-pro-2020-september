//--------- call  apply ----------


function foo() {
    // console.log(arguments.slice(), 'arguments');
    // console.log([].slice, 'slice');
    // var args = [].slice.call({}, 1);

    console.log(arguments, 'arg');

    console.log(args, 'args');
//    console.dir(Array.prototype.slice === [].slice, ' Array.prototype');
    // console.log(args, 'args');

    // args.push('aaaaa');

    // console.log(args, 'args');


}

// foo(false, 'aaa', ['aa'], {}, function(){});


// --------------- bind ----------------

// var person = {
//     firstName: 'Valera',
//     run: function() {
//         console.dir(this.firstName, 'this');
//     }
// };

// person.run();

// var _run = run.bind(person);
// _run();

// function timeOut(callback, ms) {// callback = person.run.bind(person)
//     // console.log(callback, 'callback');
//     callback();
// }


// func.bind(context, args);

// timeOut(person.run.bind(person), 1000)


// setTimeout(person.run.bind(person), 3000);

// setTimeout(function(){
//     person.run();
// }, 3000);


var person = {
    firstName: 'Valera'
};

function run() {
    console.log('Hello from global run', this);
}


// run.call(person);
// run.call(person);
// run.call(person);

var run = run.bind(person);

run();
run();
run();


// function sendAjax(url) {

//     return function(data) {
//         console.log('sending..', url);
//     }
// }

// sendAjax({login: 'Valera', password: 'asdasd123'});

// sendAjax({login: 'Pety', password: 'qwerty123123'});

// sendAjax({login: 'Kate', password: 'asdasdsad'});


// sendAjax('/reg', {login: 'Valera', password: 'asdasd123'});

// sendAjax('/reg', {login: 'Pety', password: 'qwerty123123'});

// sendAjax('/reg', {login: 'Kate', password: 'asdasdsad'});


// var authSendAjax = sendAjax('/auth');

// // console.log(authSendAjax, 'authSendAjax');

// authSendAjax({login: 'Valera', password: 'asdasd123'});
// authSendAjax({login: 'Pety', password: 'qwerty123123'});
// authSendAjax({login: 'Kate', password: 'asdasdsad'});

// var regSendAjax = sendAjax('/reg');

// regSendAjax({login: 'Valera', password: 'asdasd123'});
// regSendAjax({login: 'Pety', password: 'qwerty123123'});
// regSendAjax({login: 'Kate', password: 'asdasdsad'});



function sendAjax(url, data) {
    // debugger;
    console.log(arguments, 'arguments');
    console.log('sending..', url);
}

var authSendAjax = sendAjax.bind(null, '/auth');



authSendAjax({login: 'Valera', password: 'asdasd123'});
authSendAjax({login: 'Pety', password: 'qwerty123123'});
authSendAjax({login: 'Kate', password: 'asdasdsad'});


var regSendAjax = sendAjax.bind(null, '/reg');

// function foo(){

// }
// setTimeout(foo, 5000);



var login = document.querySelector('input[id="name"]');
var foo = document.querySelector('input[id="foo"]');

var greetingMessage = 'Hello world';

function greeting(greetingMessage) {
    console.log(greetingMessage + ' ' + this.value);
}

setInterval(greeting.bind(foo, greetingMessage), 2000);

// console.dir(login.value, 'login');

