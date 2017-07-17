
function calc() {
let calculator = document.querySelector("#container");
let num1 = 0;
let num2 = 0;
let operator = "";
let equation = num1 + operator + num2;

calculator.addEventListener("click", function(evt){
  console.log(evt);
  let output = document.querySelector("#output");

  if (evt.target.id === "clear") {
    /*  CLEARS THE OUTPUT FIELD  */
    output.textContent = "";
  }
  else if (evt.target.className === "operand") {
    num1 = Number(output.textContent);
    operator = evt.target.textContent;
    console.log(num1, operator);
    output.textContent = num1;
  }
  else if (operator.length > 0) {
    output.textContent = (evt.target.textContent);
    num2 = evt.target.textContent;
    console.log(`Our equation to solve is: ${num1} ${operator} ${num2}`);
  }
  else if (evt.target.id === "equals") {
    /*  EQUALS OUTPUT, NEEDS WORK  */
    output.textContent = "Pizza!!";
  }
  else {
  /*  PUTS ANYTHING CLICKED INTO THE OUTPUT  */
  output.textContent += (evt.target.textContent);
}
});
}

calc();
