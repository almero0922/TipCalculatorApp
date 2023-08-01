const billInput = document.getElementById("billInput");
const billForm = document.getElementById("billForm");
const buttonMatrix = document.querySelectorAll(".button-ca");
const peopleInput = document.getElementById("peopleInput");
const buttonForm = document.getElementById("buttonForm");
var buttonClicked = '';
var validNumber = new RegExp(/^\d*\.?\d*$/);
var bill = 0;

billForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let billI = billInput.value;
  if(!validNumber.test(billI)){
    document.getElementById('bill-error').classList.remove('display-none');
    return false;
  }
  document.getElementById('bill-error').classList.add('display-none');
});

