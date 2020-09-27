var arr =  [1, 2, 3, 4, 5];

document.write(arr.join('_'))


// ------- 2 ---------- 

var list = [6, 7, 2, 3, 5, 7];

document.write('<ul>');

for(var i = 0; i < list.length; i++) {
    document.write('<li>' + list[i]  +'</li>');
}

document.write('</ul>');


var list = ['Valera', 'Slava'];
console.log(list.join('</li><li>'))

document.write('--------- <br>');

document.write('<ul><li>');
document.write(list.join('</li><li>'));
document.write('</li></ul>');

document.write('--------- <br>');

/*

<ul>
    <li> 1 </li>
    <li> 2 </li>
</ul>
    

*/


var data = [1, 2, 3, 4, 5, 6]; // 6 / 2 = 3 - 1 = 2

// var data2 = [1, 2, 3, 4, 5]; // 5 / 2 = 2.5 -> 3 - 1 = 2


var count = data.length % 2 == 0 ? 2 : 1;
var position = Math.ceil(data.length / 2) - 1;


console.log(data.splice(position, count));

