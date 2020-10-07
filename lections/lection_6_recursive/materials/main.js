// module candidates

// ------- recursive -----------
// function getValue() {
//     getValue();
// }

// getValue();
var arr = [9, 3, 2];

// for(var i = 0, size = arr.length; i < size; i++) {
//     console.log(arr[i], 'arr');
// }

// function loop(arr, i) {
//     i = i || 0;

//     // console.log(arr[i]);
    
//     if (i < arr.length - 1) {
//         loop(arr, i + 1);
//     }

//     // console.log(arr[i]);

//     // loop(arr, i + 1);

// }

// loop(arr);
console.log('after call loop');


var arr = [
    1, 
    2, 
    3,
    4,
    [
        2.5, 2.6, [3.7, 3.8, 3.9]
    ],
    [
        [
            3.10, 3.11 , 3.12, [4.13, 4.14, 4.15, [5.16, 5.17, 5.18, [6.1, 6.2, 6.3]]]
        ]
    ]
];

// function loop(arr) {
//     for(var i = 0; i < arr.length; i++) {

//         if (Array.isArray(arr[i])) {
//             for(var j = 0; j < arr[i].length; j++) {
//                 console.log(arr[i][j], 'arr[i][j]');
//                 for(var k = 0; k < arr[i][j].length; k++) {
//                     console.log(arr[i][j][k], 'arr[i][j][k]');
//                 }
//             }
//         } else {
//             console.log(arr[i], 'this is not array');
//         }
//     }
// }


function loop(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            loop(arr[i]);
        } else {
            console.log(arr[i], 'this is not array');
        }
    }
}





loop(arr);



var arr = 
new Array(
    new Array(new Array(13), new Array(5), new Array(3)), 
    new Array(3),  
    new Array(
        new Array(new Array(4), new Array(new Array(6), new Array(8))), 
        new Array(4)
    )
);

console.log(arr, 'arr');

function deepArrayFiller(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            deepArrayFiller(arr[i]);
        } else {
            arr[i] = random(1, 10);
        }
    }

    return arr;
}

function random(max, min) {
    return Math.round(Math.random() * (max - min) + min); 
}

var mass = deepArrayFiller(arr);
console.log(mass, 'mass');

function row(n, dir) {
    window[dir? 'printBefore' : 'printAfter'](n)
}

function printBefore(n, str) {
    console.log(n, 'n');
    n == 1? console.log(n) : window[str](n - 1);
}

function printAfter(n) {
    n == 1? console.log(n) : printAfter(n - 1);
    console.log(n, 'n');
}

row(5, false);


// (function() {
//     var candidates = [];
// })();


function moduleCandidates() {
    var candidates = [];
}

moduleCandidates();