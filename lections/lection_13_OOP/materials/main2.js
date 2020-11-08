function Animal() {
    this.name = 'Sharik';

    this.run = function() {

    }
}

var dog = new Animal();

console.log(dog, 'dog');

var array = new Array(10, 10);
var mass = [];

// Animal();

/*
1) create new -> {}(*)
2) call function contructor Animal
3) this === * (пункт 1)
4)add proto {__proto__: Animal.prototype}(*)
*/

function Player(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var player = new Player('Valera', 'Ternavskiy', 46);
var player2 = new Player('Valera2', 'Ternavskiy2', 46);

console.log(player, 'player');
console.log(player2, 'player');

console.log(player.__proto__ === player2.__proto__, 'player.__proto__ === player2.__proto__');

console.log(player.__proto__  === Player.prototype, 'Player.prototype')
var team = [];

// for(var i = 0; i < 2; i++) {
//     var player = new Player(
//         prompt('name'),
//         prompt('last name'),
//         prompt('age')
//     );

//     team.push(player);
// }


// function foo() {

// }

// console.dir(foo, 'fooo');


function HTMLElement(tagName) {
    this.tagName = tagName;

    if (tagName.toLowerCase() === 'a') {
        this.redirect = function() {
            console.log('redirect');
        }
        
    } else if (tagName.toLowerCase() === 'img') {
        this.showPicture = function() {
            console.log('showing picture');
        }

        this.rote = function() {
            console.log('showing picture');
        }
    } else if (tagName.toLowerCase() === 'strong') {

    }

    // this.__proto__ = HTMLElement.prototype; auto
}

console.dir(HTMLElement, 'HTMLElement');
HTMLElement.prototype.render = function() {
    console.log('rendering .... from prototype', this);
}



var a = new HTMLElement('a');
var img = new HTMLElement('img');

a.render();
img.render();



function toDo() {
    console.log(this.name)
}


var obj = {
    name: 'Valera'
};

toDo.call(obj); // obj.toDo = toDo