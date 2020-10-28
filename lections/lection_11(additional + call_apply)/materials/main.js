// ---------- Call _ Apply --------

var map1 = {
    x: 10,
    y: 20
};

var map2 = {
    x: 60,
    y: 15
};

// function getCoords() {
//     return this.x + this.y + a;
// }

// getCoords(map2)
// getCoords(map1)


// map1.getCoords = getCoords;
// var result = map1.getCoords();
// delete map1.getCoords;

// map2.getCoords = getCoords;
// var result2 = map2.getCoords();
// delete map2.getCoords;

// console.log(result, 'result');
// console.log(result2, 'result2');

// console.log(map1, 'map1');
// console.log(map2, 'map2');

// console.dir(getCoords, 'getCoords');

// getCoords.call(context, args);
// function a() {
//     var result  = getCoords.call(this, 10); //map1.getCoords() => 40
// }

// var result  = getCoords.call(map1, 10); //map1.getCoords() => 40
// var result2  = getCoords.call(map2, 10); //map1.getCoords() => 85



function getCoords(a, b) {// a = mass[0], b = mass[1]
    console.log(a, 'a');
    console.log(b, 'b');
    return this.x + this.y + a;
}


var mass = [10, 'apply'];
mass.push('hgggggg');
mass[mass.length] = 'bbbbbb';

var result  = getCoords.apply(map1, mass); //map1.getCoords() => 40

var result2  = getCoords.call(map2, 10, 'call', 'hgggggg'); //map1.getCoords() => 85

console.log(result2, 'result2');