// function ajax({ method, url, payload, success, error }) {
//     let xhr = new XMLHttpRequest();
  
//     xhr.addEventListener('load', () => success.call(xhr, xhr.response));
//     xhr.addEventListener('error', error.bind(xhr, xhr.response));
  
//     //config
//     xhr.open(method,  url);
  
//     //sending request
//     method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);


   
//     console.log('inner ajax func')
//   }



const ajaxCopy = ({ method, url, payload }) => {
  return new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', () => resolve(xhr.response));
    xhr.addEventListener('error', () => reject());
  
    //config
    xhr.open(method,  url);
  
    //sending request
    method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);

  });
}
  
// console.log(ajaxCopy({}));
// console.log(ajaxCopy({}));

// ajaxCopy({
//   method: 'get',
//   url: 'http://localhost:3005/candidates'
// })
// .then(
//   response => typeof response === 'string'? JSON.parse(response) : response,
//   error => console.log(error, 'error')
// )
// .then(users => {
//   throw Error('lolo lol o');

//   if (users.length % 2 == 0) {
//     return Promise.reject(users)
//   }

//   return users;
// })
// .then(users => users.map(user => user.age))
// .then((ages = []) => ages.reduce((start, current) => start + current,  0))
// .then(data => console.log(data, 'data'))
// .catch((e) => {
//   console.log('catch global prepare', e.message);
// })
// .finally(() => {
//   console.log('100% call')
// });

/// Sytax exeption
  // throw Error('error');
// return new Promise((resolve, reject) => cond? resolve(): reject())
// return Promise.reject()

// --------------- async - await --------------


async function getData() {
  try {
    const response = await ajaxCopy({method: 'get', url: 'http://localhost:3005/candidates'});

    console.log(response, 'response after await ');
    // const id = 1;
    const response2 = await ajaxCopy({method: 'get', url: 'http://localhost:3005/candidates?id=1'});
    
  } catch(error) {
    console.log('reject')
  }
}

// console.log(getData(), 'return fron getData async function')


// getData();

// .then(value => {
//   console.log(value)
// })