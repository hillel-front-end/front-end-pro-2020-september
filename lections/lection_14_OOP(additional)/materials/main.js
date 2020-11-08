// Lection - 14
function HTMLElement() {}

HTMLElement.prototype.render = function() {
    console.log('render from HTMLElement');

}


// HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;
HTMLAnchor.prototype = Object.create(HTMLElement.prototype);
HTMLAnchor.prototype.constructor = HTMLAnchor;
//{__proto__: HTMLElement.prototype}
// console.log(HTMLElement.prototype, 'HTMLElement.prototype');
// console.log(HTMLAnchor.prototype, 'HTMLAnchor.prototype');

function HTMLAnchor(href, id, className, flag) {
    this.href = href;
    this.id = id;
    this.className = className;

    if (flag) {
        this.redirect = function() {
            console.log('another redirect');
        }
    }


}


HTMLAnchor.prototype.redirect = function() {
    console.log('common redirect');
}


// HTMLAnchor.prototype.render = function() {
//     console.log('render from HTMLAnchor');
// }


var a = new HTMLAnchor('https://hille.com', 'go-to-hillel', 'go-to-hillel', true);
var a2 = new HTMLAnchor('https://hille.com', 'go-to-hillel', 'go-to-hillel');


// a.click();

console.log(a, 'a');

// a.redirect();
// a2.redirect();

a.render();


function HTMLElementIMG (src) {
    this.src = src;
}


HTMLElementIMG.prototype = {
    constructor: HTMLElementIMG
}

HTMLElementIMG.prototype = Object.create(HTMLElement.prototype);
HTMLElementIMG.prototype.constructor = HTMLElementIMG;



HTMLElementIMG.prototype.showPicture = function() {
    console.log('showing...');
}


var img = new HTMLElementIMG('../assets/img/pic.png');

// img.render()

// class HTMLElementIMG {
//     constructor(name) {
//         this.name = name;
//     }

//     showPicture() {

//     }
// }

// Array.prototype.myPush = function() {
//     console.log('My Push');
// };

// [].__proto__.myPush =  function() {
//     console.log('My Push');
// };

// var arr = [];


// arr.myPush();


// var z = [];

// z.myPush();

// console.log(z, 'z');

// console.log(Object.prototype === function(){}.__proto__.__proto__);

// console.dir(function(){})




function Slider(pictures) {
    //public count = 0; => this.count = 0;
    //private var count = 0;
    this.pictures = pictures;

    var _count = 10;
    var size = pictures.length || 0;

    function processCount() {
        console.log('private');
    }

    this.getterCount = function() {
        return _count;
    };

    this.setterCount = function(value) {
        if (value && (value > 0 && value <= size)) {
            _count = value;
        }
    };
    
}

var slider = new Slider(['pic1', 'pic2']);


console.log(slider, 'slider');

// slider.count = 10;