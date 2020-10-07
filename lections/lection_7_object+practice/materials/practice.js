/* № - 1
 Имеем функцию getPersons(names, from, to) которая возвращает объект [{name: name, age: Math.random()}]
* Создать массив из 5 таких объектов.
* Найти средний возраст.
* Создать массив имен без повторения.
* самого старшего человека(HW)
*/
var data = ['a', 'b', 'c', 'd', 'a', 'd'];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function getPersons(data) {
    return data.map(function(name, index) {
        return {
            name: name,
            age: Math.round(random(18, 30))
        }
    });
}

function getMiddleAge(arr) {
    var sumAge = 0;

    if(!(Array.isArray(arr) && arr.length > 0)) return sumAge;

    sumAge = arr.reduce(function(previous, current) {
        return current.age + previous;
    }, 0);

    return Math.round(umAge / data.length);
}

var persons = getPersons(data);
var avarage = getMiddleAge(persons);

console.log(persons, 'persons');




