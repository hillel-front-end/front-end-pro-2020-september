console.log("Lection_1");
window.onload = function () {
  /*
Dom navigation
*/
  /*events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
], 

*/
  //   const box = document.querySelector(".box");
  //   console.dir(box, "box");
  //box.onclick()
  //   box.onclick = function () {
  //     // console.log(this, "this");
  //     //sendAjax()
  //     //prepare()
  //     //showInfo()
  //     console.log(this, "this");
  //     this.classList.toggle('target');
  //     console.log("click");
  //   };
  //   box.onclick = function () {
  //     // console.log(this, "this");
  //     //sendAjax()
  //     //prepare()
  //     //showInfo()
  //     // console.log(this, "this");
  //     // this.classList.toggle("target");
  //     console.log("click");
  //   };
  //   box.onmousedown = function () {
  //     console.log("onmousedown");
  //   };
  //   box.onmouseup = function () {
  //     console.log("onmouseup");
  //   };
  //   document.oncontextmenu = () => {
  //     console.log("context - menu");
  //   };
  //   const randomColor = (min, max) =>
  //     `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`;
  //   const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  //   //   box.onmousemove = function () {
  //   //     console.log("move");
  //   //     // this.style.backgroundColor = randomColor(0, 156);
  //   //   };
  //   box.onmouseenter = function () {
  //     console.log("onmouseenter");
  //     this.style.backgroundColor = randomColor(0, 156);
  //   };
  //   box.onmouseleave = function () {
  //     console.log("onmouseleave");
  //     this.style.backgroundColor = "black";
  //   };
  //   console.log((box.style.fontSize = 200 + "px"), "font-size");
  // =========== practice ==========
  const box = document.querySelector(".box");

  //   box.onclick = function () {
  //     console.log("click");
  //   };

  //   box.onclick = function () {
  //     console.log("click - 2");
  //   };

  // addEventListener('event', hangle);

  //   box.addEventListener("click", function () {
  //     console.log("click from addEventListener");
  //   });

  //   box.addEventListener("click", function () {
  //     console.log("Another click from addEventListener");
  //   });

  //   box.addEventListener("click", function () {
  //     console.log("3 - Another click from addEventListener");
  //   });

  // clinetX\Y pageX\Y, offsetX\Y

  function handler(event) {
    const { clientX, clientY, pageX, pageY, offsetX, offsetY } = event;

    this.innerHTML = `
        clientX = ${clientX}
        clientY = ${clientY}
        pageX = ${pageX}
        pageY = ${pageY}
        offsetX = ${offsetX}
        offsetY = ${offsetY}
    `;
  }

  box.addEventListener("click", handler);

  box.addEventListener("contextmenu", handler);
  //   box.onclick = function (event) {
  //     console.log(event, "event");
  //   };

  //   {
  //       onclick:  func(){ log(2)}
  //   }

  //   box.onclick = func(){}
  //   box.onclick = func(){ log(2)}
  //     function initDragAndDrop(elem) {
  //     }
  //     initDragAndDrop(box);
};
