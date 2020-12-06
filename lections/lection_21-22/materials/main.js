console.log('Lection_20');
window.onload = function() {


// localStorage
// sessionStorage

console.log(localStorage, 'localStorage');

// localStorage.setItem('name', 'Valera'); //set

// console.log(localStorage.getItem('name'), 'getItem');

const key = 'lastName';

console.log(localStorage[key], key);


// for(let i in localStorage) { //hasOwnPropety, Object.entries(localStorage)
//     // console.log(localStorage[i], 'i');
//     if (localStorage.hasOwnProperty(i)) {
//         console.log(i, 'i');
//     }
// }



// document.write([1, 2, 3]);




// --------- Serialase JSON -----------

const a = {
    name: 'Valera',
    lastName: 'Pety',
    children: [
        {
            name: 'Kate',
            age: 26
        }
    ],
    isMarried: false,
    foo: null
};


/*
JSON поддерживает следующие типы данных:
    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.
*/

// console.log(JSON);// JSON.stringify() JSON.parse()

// const prod = {
//     expires: 1605722063636,
//     id: 258557621,
//     parent_id: 80124,
//     viewed: 1605367418193
// };

// const jsonProduct = JSON.stringify(prod);

// localStorage.setItem('goods_id_258557621', jsonProduct);

// console.log(localStorage.getItem('goods_id_258557621'))

// document.body.innerHTML = localStorage.getItem('goods_id_258557621');
// // console.log(JSON.stringify(a), 'stringify');

// const deSerialize = JSON.parse(localStorage.getItem('goods_id_258557621'));

// console.log(deSerialize, 'deSerialize');


// ========= Example ==========


const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('input', onChange));

document.querySelector('#auth').addEventListener('submit' , event => event.preventDefault());


const storeHelper = {
    setInStore(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getFromStore(key) {
        return JSON.parse(localStorage.getItem(key));
    } 
};


function appendDataFromLocalStore(items, key) {
    const data = storeHelper.getFromStore(key);


    items.forEach(item => {
        if (!data[item.name]) return;

        item.value = data[item.name];
    });
}

appendDataFromLocalStore(inputs, 'cred');

function onChange(event) {
    if (this.name && this.value) {
        const key = 'cred';

        storeHelper.setInStore(key, {
            ...storeHelper.getFromStore(key),
            [this.name]: this.value
        });
    }
}


// window.onload = () => appendDataFromLocalStore(inputs, 'cred');



// storeHelper.value = 123
// ====TEST=====

// function set(y) { // y = x
//     y = 1;
// }

// var x = 0;

// set(x);


// console.log(x);

// function addFruit(basket) { //basket = fruits
//     basket[0] = "Apple";
// }

// var fruits = [];

// addFruit(fruits);

// console.log( fruits[0] ) ;




}