// + Глобальные обьекты Window
//
// ================ Browser object model(BOM) =======================
/*
  + window innerH\W 
  + navigator
  + location
  + screen
  + Спецификация HTML
 */
// navigator.getBattery().then((l) => {console.log(l, 'l'); })
//navigator.userAgent
//navigator.platform

//+ setTimeout,  setInterval, alert, confirm

//================== Document Object Model(DOM) ======================

/*
+ Глобальные обьект Document
+ (CDT), $0, $1
+ DOM иерархия 
+ JS обращение в html, closest, match, contain
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
+ Style
*/

console.log(window.innerHeight, "innerHeight");
console.log(window.innerWidth, "innerWidth");

// const page = location.search.slice(1).split("&")[0];
// const count = location.search.slice(1).split("&")[1];

// console.log(page, count);
var searchParams = new URLSearchParams(location.search.slice(1));

console.log(searchParams, "searchParams");
const queryParams = {};
for (let param of searchParams) {
  //   console.log(param, "param");
  queryParams[param[0]] = param[1];
}

console.log(queryParams, " queryParams");

// location.search = "foo=12";
// location.href = "https://schema.org/Person";

// location.reload();

// window.onload = function () {

// };
function Text(value) {
  this.value = value;
}

const someText = new Text("some text");

console.dir(document.body, "body");
console.dir(document.documentElement, "html");
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 2000);

// const divs = document.getElementsByTagName("div");

// console.log(divs, "divs");

// const copyDivs = Array.from(divs); // [].call.slice(divs)

// console.log(copyDivs, "copyDivs");

// for (div of divs) {
//   console.log(div, "div");
// }

// const domListCollection = document.getElementsByClassName("foo");

// console.log(domListCollection, "domListCollection");

// const login = document.getElementById("login");

// console.log(login, "login");

// const nodeList = document.querySelectorAll("#body .container span.target");
// const node = document.querySelector("#body .container span.target");

// console.log(node, "node");
// console.log(nodeList, "nodeList");

// const domListCollection = document.getElementsByClassName("target");
const nodeList = document.querySelectorAll(".target");
const node = document.querySelector(".target");
const login = document.querySelector("#login");
const container = document.querySelector(".container");

// node.innerHTML = "loding...";

setTimeout(() => {
  container.align = "center";
  node.innerHTML += "<strong>goods</strong>";
  login.value = "Heloo fron JAVASCRIPT";
  //   node.innerText = "<strong>goods</strong>";
}, 2000);
// console.dir(node.innerHTML, "innerHTML");
// console.log(nodeList, "nodeList");
// console.log(domListCollection, "domListCollection");
// console.log(nodeList, "nodeList");
