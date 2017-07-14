
function calc() {
let calculator = document.querySelector("#container");

calculator.addEventListener("click", function(evt){
  console.log("click goes the dynamite");
  console.log(evt.target.textContent);
  let output = document.querySelector("#output p");
  output.textContent += evt.target.textContent;
});
}

calc();
