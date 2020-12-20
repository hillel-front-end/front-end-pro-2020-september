/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
    5)async-await, generators?
*/

// ------------------- async -------------------
// const buttons = document.querySelectorAll('.load, .confirm');

// document.querySelector('#start').addEventListener('click', function() {
//    ajaxSync();
// });

// buttons.forEach((button) => {
//    button.addEventListener('click', function() {
//       console.log('click');
//    });
// });

// console.log(1);


// setTimeout(() => {
//    console.log(2);
// }, 5000);

// function setTimeOutMine() {
//    console.log(2);
// }

// setTimeOutMine();

// console.log(3);

let sum = 0;

function ajaxSync() {
   setTimeout(() => {
      for(let i = 0; i < 1e9; i++) {
         sum += i;
      }

       console.log(sum, 'sum');
   });

   console.log('sync action');
}

// // ajaxSync();

// console.log('after ajax');

// console.log('create navigation');


// setTimeout(() => {
//    console.log(2);
// }, 0);

// console.log(1);


// ajaxSync();

// console.log('render navigation');






// const buttons = document.querySelectorAll('.load, .confirm');


// ------------ callback hell -------------

let _isAuth = null; //bad

ajax({
   method: 'get',
   url: 'http://localhost:3005/auth',
   success(response) {
      const { success: isAuth, userId } = JSON.parse(response);

      console.log(isAuth, 'isAuth =--> response');
      _isAuth = isAuth;

      if (userId) {
         ajax({
            method: 'get',
            url: `http://localhost:3005/validation-userId`,
            success(response) {
               ajax({
                  method: 'get',
                  url: `http://localhost:3005/all-products-by-userId?userId:${userId}`,
                  success(response) {
                     // filter()
                     // map()
                     if (true) {
                        ajax({
                           method: 'get',
                           url: 'http://localhost:3005/sales',
                           success(products) {
                              //prepare()
                              //render()
                           },
                           error() {
                  
                           }
                        });
                     }
                  },
                  error() {
         
                  }
               });
            },
            error() {
   
            }
         });
      }
   },
   error() {

   }
});

// ajax('auth')
// ajax('validation-userId')
// ajax('all-products')
// ajax('check-current-product')
// ajax('sales')


// console.log('after ajax func')

// console.log(_isAuth, 'isAuth');


// ----------- Promise --------------


// fetch(), axios

// console.log('1')


// ajax('auth')
//yes - ajax('get-all-products')
//no - ajax('auth-google')

function random(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

// console.log(1);

const promise = new Promise((resolve, reject) => {
   // console.log(0);
   
   setTimeout(() => {
      const id = random(5, 20);
      const isEven = (id % 2) === 0;

      if (true) {
         resolve({isEven, who: 'it`s resolve', id})
      } else {
         reject(isEven)
      }
      // console.log(2, 'async');
   }, 1000);
});

// console.log(3);

promise
   .then(({ isEven, who, id }) => {
      console.log('then 1.1 -- resolve');
      return Promise.reject()
   },
   (isEven) => {
      console.log('then 1.2 -- reject');
   })

   .then(() => {
      console.log('then 2.1 -- resolve');
   },
   () => {
      console.log('then 2.2 -- reject');
      throw Error('Hello front-end pro')
   })

   .then(() => {
      console.log('then 2.1 -- resolve');
   },
   () => {
      console.log('then 2.2 -- reject');
      throw Error('Hello front-end pro')
   })

   .then(() => {
      console.log('then 3.1 -- resolve');
   },
   () => {
      console.log('then 3.2 -- reject');
   });

//2 - n


// throw Error('error');
// return new Promise((resolve, reject) => cond? resolve(): reject())
// return Promise.reject()






// console.log(4);