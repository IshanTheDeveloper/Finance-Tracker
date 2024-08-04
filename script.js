let results = document.querySelector("#result");
let descriptions = document.querySelector("#description-area");
let amounts = document.querySelector("#amount");
let category = document.querySelector("#selection-area");
let buttons = document.querySelector("#button");
let outputs = document.querySelector(".output");
const operations = () => {
  totalBalance();
  const span = document.createElement("span");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.innerText = descriptions.value;
  para2.innerText = amounts.value;
  span.setAttribute("class", "output-value");
  para1.setAttribute("id", "description-name");
  para2.setAttribute("id", "usedAmount");
  span.appendChild(para1);
  span.appendChild(para2);
  outputs.appendChild(span);
  if (category.value == "Income") {
    para1.style.color = "green";
    para2.style.color = "green";
  } else {
    para1.style.color = "red";
    para2.style.color = "red";
  }
  amounts.value = "";
  descriptions.value = "";
};

const totalBalance = () => {
  if (category.value == "Income") {
    results.innerText = Number(amounts.value) + Number(results.innerText);
  } else {
    results.innerText = Number(results.innerText) - Number(amounts.value);
    results.style.color = "red";
  }
};

buttons.addEventListener("click", operations);
