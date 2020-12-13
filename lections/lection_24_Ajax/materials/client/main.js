/* 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: вызван конструктор
    1: вызван метод open
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов
   xhttp.open("GET", "req_url", true);
   xhttp.send();
*/


/*
obj  = {
  method: http methods
  url: server url
  success: func(),
  error: func()
}
*/




// const button = document.querySelector('#foo');

// button.addEventListener('click', function() {
  // ajax({
  //   method: 'GET',
  //   url:  `http://localhost:3005/users`,
  //   success(response) {
  //     const data = JSON.parse(response);
  //     console.log(data, 'data');
  //   },
  //   error(error) {
  //     console.log(error, 'error');
  //   }
  // });
// });


// ----- small practice -----------

function ajax({ method, url, payload, success, error }) {
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => success.call(xhr, xhr.response));
  xhr.addEventListener('error', error.bind(xhr, xhr.response));

  //config
  xhr.open(method,  url);

  //sending request
  method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);
}




function registrationModule(selector) {
  const config = {
    $form: document.querySelector(selector),
    config: null,

    init(config) {
      this.config = config;
      this.bindEvent();
    },

    signIn() {
      const payload = JSON.stringify(this.prepare());

      ajax({
        ...this.config,
        payload
      });
    },

    bindEvent() {

      this.$form.addEventListener('submit', event => {
          event.preventDefault();

          this.signIn();
      });

    },

    prepare() {
      const data = {};

      [].forEach.call(this.$form, ({ name, value, tagName }) => {
        if (tagName.toUpperCase() === 'BUTTON' || !(name && value)) return;

        data[name] = value;
      });

      return data;
    }   
  };


  return {
    init: config.init.bind(config)
  };
}

const a = registrationModule('#registration')
  .init({
    method: 'POST', 
    url:  `http://localhost:3005/registration`,
    success(response) {
      console.log(response, 'response');
    },
    error(error) {
      console.log(error, 'error');
    }
  });