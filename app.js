let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btn = document.querySelector("#calculate");
let p = document.querySelector("#result");

btn.addEventListener("click", () => {
  let sum = parseInt(num1.value) + parseInt(num2.value);
  p.innerText = `The result is ${sum}.`;
  num1.value = "";
  num2.value = "";
  setTimeout(() => {
    p.innerText = "";
  }, 3000);
});
