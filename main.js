
function calc() {
let calculator = document.querySelector("#container");

calculator.addEventListener("click", function(evt){
  console.log(evt);
  let output = document.querySelector("#output");

  if (evt.target.id === "clear") {
    output.textContent = "";
  }
  else {
  /*  PUTS ANYTHING CLICKED INTO THE OUTPUT  */
  output.textContent += evt.target.textContent;
}
});
}

calc();
