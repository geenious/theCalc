
function calc() {
  let calculator = document.querySelector("#container");
  let num1;
  let num2;
  let operator = "";
  let equation = num1 + operator + num2;
  let isFirstCharacter = true;

  function hardClear() {
    output.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    isFirstCharacter = true;
  }

  function clear() {
    output.textContent = "";
  }

  calculator.addEventListener("click", function(evt){
    console.log(evt);
    let output = document.querySelector("#output");

    if (evt.target.id === "clear") {
      /*  CLEARS THE OUTPUT FIELD AND RESETS VARIABLES  */
      hardClear();
    }
    else if (evt.target.className === "operand") {
      num1 = Number(output.textContent);
      console.log("First Number: ", num1);
      operator = evt.target.textContent;
      console.log("Operand: ", operator);
      output.textContent = num1;
    }
    else if (evt.target.id === "equals") {
      /*  EQUALS OUTPUT, NEEDS WORK  */
      if (operator === "+") {
        output.textContent = num1 + num2;
      }
      else if (operator === "-") {
        output.textContent = num1 - num2;
      }
      else if (operator === "X") {
        output.textContent = num1 * num2;
      }
      else if (operator === "/") {
        output.textContent = num1 / num2;
      }
      isFirstCharacter = true;
    }
    else if (operator.length > 0) {
      if (isFirstCharacter) {
        clear();
        isFirstCharacter = false;
      }
      output.textContent += Number(evt.target.textContent);
      num2 = Number(output.textContent);
      console.log("Second number: ", num2);
      console.log(`Our equation to solve is: ${num1} ${operator} ${num2}`);
    }
    else {
    /*  PUTS ANYTHING CLICKED INTO THE OUTPUT  */
    output.textContent += (evt.target.textContent);
    }
  });
}

calc();
