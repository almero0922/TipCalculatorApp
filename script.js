const billInput = document.getElementById("billInput");
const billForm = document.getElementById("billForm");
const buttonMatrix = document.querySelectorAll(".button-ca");
const buttonForm = document.getElementById("buttonForm");
const customBform = document.getElementById("custom%");
const peopleInput = document.getElementById("peopleInput");
const peopleForm = document.getElementById("peopleForm");
var buttonClicked = "";
var customValue = 0;
var validNumber = new RegExp(/^\d*\.?\d*$/);
var validNum = new RegExp(/^\d+$/);
var bill = 0;
var people = 0;

billForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bill = parseFloat(billInput.value);
  if (!validNumber.test(billInput.value)) {
    document.getElementById("bill-error").classList.remove("display-none");
    return false;
  }
  document.getElementById("bill-error").classList.add("display-none");
});

buttonForm.addEventListener("click", (e) => {
  e.preventDefault();
  let matrix = [];
  buttonMatrix.forEach((button) => {
    if (button.classList.contains("button-clicked")) {
      button.classList.remove("button-clicked");
    }
    matrix.push(button.id);
  });
  if (e.target.id != "custom%" && matrix.indexOf(e.target.id) != -1) {
    document.getElementById(e.target.id).classList.add("button-clicked");
  }
  buttonClicked = e.target.id;
});

customBform.addEventListener("blur", (e) => {
  e.preventDefault();
  customValue = parseFloat(e.target.value);
});

peopleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  people = parseInt(e.target.value);
  if (!validNum.test(peopleInput.value)) {
    document.getElementById("people-error").classList.remove("display-none");
    return false;
  }
  document.getElementById("people-error").classList.add("display-none");
  setTotalAmount();
});

function setTotalAmount(){
  let bill = parseFloat(billInput.value);
  let people = parseInt(peopleInput.value);
  let percentage = customValue ? parseFloat(customValue) : parseFloat(buttonClicked);
  let totalP = (bill / people) * percentage;
  let total = totalP + (bill / people);

  document.getElementById('result-0').innerText = totalP;
  document.getElementById('result-1').innerText = total;
}