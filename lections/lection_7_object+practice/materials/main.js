// number, string, boolean, undefined, null -> primitive 
// object, array, function -> links

var a = '123';
var b = a;

b = 'aaaa';

console.log(a, 'a');
console.log(b, 'b');


var z = [1, 2 ,3];
var n = z;

var m = n;

n[1] = 'aaaaaa';

console.log(z, 'z');

function random(min, max) {
    return Math.random() * (max - min) + max;
}

function arrayFiiler(array, size) { //array = data
    for(var i = 0; i < size; i++) {
        array[i] = Math.round(random(1, 10));
    }
}

var data = [];

arrayFiiler(data, 10);

console.log(data, 'data');

// ------------ Object -----------
// var team = [['forwad', 'a', 'man'], 'b', 'c', 'd'];

/*

.person {
    color: blue;
    display: inline-block;
    padding: 10px;
    color: red;
}

var person = {
    property: value,
    color: blue,
}
*/

function z() {

}

var player = {
    name: 'Valera',
    lastName: 'Ternavsky',
    role: 'Forward',
    isMarried: false,
    children: ['123',112],
    foo: {

    },
    run: function() {
        console.log(player.name + ' ' + 'running...');
        return 1;
    }
};


// var team = [];

// for(var i = 0; i < 2; i++) {
//     team.push({
//         name: prompt('name'),
//         role: prompt('role')
//     });
// }

// console.log(team, 'team');




// console.log(team[0][1]) bad
//arr.length


// ----------------- read key ----------
console.log(player, 'player');

// console.log(player.name, 'name');
var name = player.name;

var children = player.children;
// console.log(children, 'children');
// Math.round();
// console.log()

player.run();
// var run = player.run;
// console.log(run, 'run');

var config = {
    read: function() {
        console.log('read')
    },
    write: function() {
        console.log('write');
    },
    update: function() {},
    delete: function(){},
    "update muataion": function(){}
}

function toDo(callback) { // callback = config.read
    console.log(callback, 'callback');
}

toDo(config.read)


// console.log(config.update_muataion, 'update_muataion')

// console.log(config['update muataion'], "config['write']");

var key = 'name';

// console.log(player[key], key);

// console.log(player.key, 'player.key');


// ----------------- write key - value ----------

// player.name = 'Alex';
player['name'] = 'Alex';

// console.log(player.name, 'name');


// ----------------- delete key - value ----------

delete player.name; // remove key

console.log(player, 'player');

// -------------- loop with object ----------

for(var key in player) {
    // console.log(key, 'key');
    console.log(player[key], key);
}
