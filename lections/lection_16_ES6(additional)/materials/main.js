const g = 1;
const str = "somet" + (12 + g)
+ "text"; // '"sas"' "'asa'"

const str2 = `some 
 ${g + 12}
text`;

const getUserName = (user = {name: 'anonym'}) => `${user.name} Welcome`;

const str3 = `Hello "${getUserName()}"`;

console.log(str3, 'str3');

var goods = [
    { name: 'juice', price: 100, currency: 'USD',isBought: false },
    { name: 'cola', price: 82, currency: 'UAH', isBought: false },
    { name: 'sprite', price: 50, isBought: false },
    { name: 'sprite', price: 30, isBought: true },
    { name: 'sprite', price: 70, isBought: true },
    { name: 'fanta', price: 70, isBought: true },
    { name: 'soda', price: 70, isBought: true },
    { name: 'soda', price: 70, isBought: true }
];

/*
 <div class="goods">
    <div class="goods__item goods__item--bought">juice, 100грн</item>
    <div class="goods__item">cola, 82грн</item>
    <div class="goods__item">sprite 30грн</item>
 </div>
*/

// console.log(goods.map(good => '<div class="goods__item">' + good.name + '</div>'));

// const markup = 
// '<ul class="goods">' 
//     + goods.map(good => '<li class="goods__item ' + (good.isBought? 'goods__item--bought': '')  + '">' + good.name + '</li>').join(' ')
// + '</ul>';

const NAT_CUR = "UAH";
const makePrice = (NAT_CUR, price) => `${price} ${NAT_CUR}`;
const makePriceUAH = makePrice.bind(null, NAT_CUR);
const makePriceUSD = makePrice.bind(null, 'USD');

const markup = `
    <ul class="goods">
        ${goods.map(({isBought, price, name, currency}, index) => `
            <li class="goods__item ${isBought? 'goods__item--bought' : ''}">
                ${name}, ${currency == 'USD'? makePriceUSD(price) : makePriceUAH(price)}
            </li>`).join('')}
    </ul>
`

// console.log(markup, 'markup')

document.write(markup);


// obj - get, set


const person = {
    firstName: 'Valera',
    lastName: 'Petrov',
    street: 'Adasd',
    build: '1',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        console.log(value, 'value');
    },
    get address() {
        return `${this.street}, ${this.build}`
    }
};

console.log(person.address, 'person');

person.street = 'Tallinskiy';
person.build = '9';

console.log(person.address, 'address');



const valera = {
    salary: '1000',
    currency: 'USD',
}


function decoratePersonObject(person) {
    return {
        ...person,
        get salaryInfo() {
            return `${this.salary} ${this.currency}`
        }
    }
}




console.log(valera.salaryInfo, 'getSalaryInfo');

// console.log(person.fullName, 'read --> call get fullName');

// person.fullName = 'Valera Ternavsky' // write -> call set fullName


//  ============ Destructuring objects ============

const good =  { 
    name: 'cola', 
    price: 82, 
    currency: 'UAH', 
    isBought: false,
    childObject: {
        z: 12
    }
 };

console.log(good.name, 'name');
console.log(good.price, 'price');
console.log(good.currency, 'currency');

console.log()
const z1 = good.childObject.z;

const { name, price, currency, isBought, childObject: { z } } = good;

console.log(name, price, currency, isBought, z, 'name, price, currency, isBought, z');

// const name = good.name;


// class




function Car() {
    this.mark = 'Mercedes';
    this.model = 'R - 350';
    this.drive = function(){
        console.log('draving ..');
    }
}

const {mark, model, drive} = new Car();


// console.log(drive(), 'drive');

//  ============ Destructuring arrays ============

const array = ['first', 'b', 'c', 'last'];

let [k1, , , k4] = array;

// array[array.length - 1]

console.log(k1, k4, 'k1, k2, k3, k4');

// let a = array[0];
// let b = array[1];

const mass = [1, 2];

// [mass[1], mass[0]] = [mass[0], mass[1]];

// const swap = mass[0];
// mass[0] = mass[1];
// mass[1] = swap;git 

// console.log(mass, 'mass');

// ======= loop (for - of) ==========


// for(let i = 0; i < 3; i++){
//     console.log(array[i])
// }

// 1 => let item = array[0]  2 => let item = array[1] ,..., n let item = array[n]

// for(let item of array) {
//     console.log(item, 'item');
// }

// for(let index in array) {
//     console.log(array[index], 'i');
// }

// for(let key in object) {
//     console.log(object[key], 'i');
// }