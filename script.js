let subtract = document.querySelector("#subtract-btn");
let reset = document.querySelector("#reset-btn");
let add = document.querySelector("#add-btn");
let number = document.querySelector("#number");


subtract.addEventListener("click", function() {
  let output = number;
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 1000;
  }

  output.innerText = result;
});

reset.addEventListener("click", function() {
  let output = number;
  let result = Number(output.innerText);

  if (result > 0) {
    result = 0;
  }

  output.innerText = result;
});

add.addEventListener("click", function() {
  let output = number;
  let result = Number(output.innerText) + 1;

  if (result > 1000) {
    result = 0;
  }

  output.innerText = result;
});
