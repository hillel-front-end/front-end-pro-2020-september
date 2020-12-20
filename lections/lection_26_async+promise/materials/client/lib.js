function ajax({ method, url, payload, success, error }) {
    let xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', () => success.call(xhr, xhr.response));
    xhr.addEventListener('error', error.bind(xhr, xhr.response));
  
    //config
    xhr.open(method,  url);
  
    //sending request
    method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);


    console.log('inner ajax func')
  }
  