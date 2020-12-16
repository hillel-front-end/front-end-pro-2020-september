/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
*/


window.onload = function() {
    console.log(1)
    

    setTimeout(() => {
        console.log(2)
    }, 0);


    for(let i = 0, sum = 0; i < 100000; i++) {
        sum += i;
    }

    console.log('afte loop', 3);


    
function ajax({ method, url, payload, success, error }) {
    let xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', () => success.call(xhr, xhr.response));
    // xhr.addEventListener('error', error.bind(xhr, xhr.response));
  
    //config
    xhr.open(method,  url);
  
    //sending request
    method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);
  
  
    // console.log(xhr.response)
  }


    //-- CallBackHell -----------
let _isAth = null;

    ajax({
        method: 'post',
        url:  `http://localhost:3005/auth`,
        success(isAuth) {
            console.log(isAuth)
            _isAth = isAuth;
        },
        error(error) {
            console.log(error, 'error');
        }
    });

    if (!_isAth) {
        ajax({
            method: 'post',
            url:  `http://google-ath`,
            success(response) {
                const data = JSON.parse(response);
                console.log(data, 'data');
            },
            error(error) {
                console.log(error, 'error');
            }
        });
    }

};