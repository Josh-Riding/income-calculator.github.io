function onSubmit(event) {
    console.log('form submitted')
    const selectPayToggle = document.querySelector('input[name="pay_toggle"]:checked');
    const payToggle =  selectPayToggle.value;
    if (payToggle == "consistent") {
        consistentPay();
    } else {
        inconsistentPay();
    };
    event.preventDefault();
}

//function whenInconsistentPayClicked
const consistentPayRadio = document.getElementById("consistent");

consistentPayRadio.addEventListener("click", function() {
  const paycheckAmountDiv = document.getElementById('paycheck_amount');
  const dynamicInputs = paycheckAmountDiv.querySelectorAll('input:not(:first-child)');
  const brElements = paycheckAmountDiv.querySelectorAll('br');
  const plusButton = document.getElementById('plusbutton');

  dynamicInputs.forEach(function(input) {
    paycheckAmountDiv.removeChild(input);
  });

  brElements.forEach(function(br) {
    paycheckAmountDiv.removeChild(br);
  });

  // Hide the plus button
  plusButton.style.display = 'none';
});


//make sure to unhide the plus button.
const inconsistentPayRadio = document.getElementById("inconsistent");
inconsistentPayRadio.addEventListener("click", function() {
    document.getElementById("plusbutton").style.display = "inline";
  });

//function to add another input if plus button clicked.
const plusButton = document.getElementById("plusbutton");
plusButton.addEventListener("click", function() {
     const newInput = document.createElement("input");
    //  const newPlusButton = document.createElement("button");
    //  const newButtonText = document.createTextNode("+");
     const lineBreak = document.createElement("br");
    //  newPlusButton.appendChild(newButtonText);
     const paycheckDiv = document.getElementById("paycheck_amount")
     paycheckDiv.appendChild(lineBreak)
     paycheckDiv.appendChild(newInput);
     newInput.setAttribute('placeholder',"Enter Paystub Amount")
     newInput.setAttribute('class', "sum-input")
     newInput.setAttribute('type',"number")
    //  paycheckDiv.appendChild(newPlusButton)
  });

//function that submit can't be pushed if an input is empty
  function consistentPay() {    
    const selectPayCadence = document.querySelector("#pay_cadence");
    const payCadence = selectPayCadence.value;
    if (payCadence == 'two_weeks'){
        consistentTwoWeeks();
    } else if (payCadence == 'weekly'){
        consistentWeekly();
    } else if (payCadence == 'monthly'){
        consistentMonthly();
    } else {
        consistentTwiceMonthly();
    }
    
  }

  function inconsistentPay() {    
    const selectPayCadence = document.querySelector("#pay_cadence");
    const payCadence = selectPayCadence.value;
    if (payCadence == 'two_weeks'){
        inconsistentTwoWeeks();
    } else if (payCadence == 'weekly'){
        inconsistentWeekly();
    } else if (payCadence == 'monthly'){
        inconsistentMonthly();
    } else {
        inconsistentTwiceMonthly();
    }
    
  }  

function consistentTwoWeeks(){
    const selectPaycheckAmount = document.querySelector("#paycheck_amount input");
    const paycheckAmount = selectPaycheckAmount.value;
    yearly.textContent = `Yearly Income: ${paycheckAmount * 26}`;
    monthly.textContent = `Monthly Income: ${(paycheckAmount * 26)/12}`;
}
function consistentWeekly(){
    const selectPaycheckAmount = document.querySelector("#paycheck_amount input");
    const paycheckAmount = selectPaycheckAmount.value;
    yearly.textContent = `Yearly Income: ${paycheckAmount * 52}`;
    monthly.textContent = `Monthly Income: ${(paycheckAmount * 52)/12}`;
}
function consistentMonthly(){
    const selectPaycheckAmount = document.querySelector("#paycheck_amount input");
    const paycheckAmount = selectPaycheckAmount.value;
    yearly.textContent = `Yearly Income: ${paycheckAmount * 12}`;
    monthly.textContent = `Monthly Income: ${(paycheckAmount * 12)/12}`;
}
function consistentTwiceMonthly(){
    const selectPaycheckAmount = document.querySelector("#paycheck_amount input");
    const paycheckAmount = selectPaycheckAmount.value;
    yearly.textContent = `Yearly Income: ${paycheckAmount * 24}`;
    monthly.textContent = `Monthly Income: ${(paycheckAmount * 24)/12}`;
}
function inconsistentTwoWeeks() {
    const allInputs = document.getElementsByClassName("sum-input");
    let sum = 0;
    const numOfPaystubs = allInputs.length;
    for (let i = 0; i < allInputs.length; i++) {
        sum += parseFloat(allInputs[i].value) || 0;
    }
    const toMultiply = sum/numOfPaystubs;
    yearly.textContent = `Yearly Income: ${toMultiply * 26}`;
    monthly.textContent = `Monthly Income: ${(toMultiply * 26)/12}`;

}

function inconsistentWeekly(){
    const allInputs = document.getElementsByClassName("sum-input");
    let sum = 0;
    const numOfPaystubs = allInputs.length;
    for (let i = 0; i < allInputs.length; i++) {
        sum += parseFloat(allInputs[i].value) || 0;
    }
    const toMultiply = sum/numOfPaystubs;
    yearly.textContent = `Yearly Income: ${toMultiply * 52}`;
    monthly.textContent = `Monthly Income: ${(toMultiply * 52)/12}`;
}
function inconsistentMonthly(){
    const allInputs = document.getElementsByClassName("sum-input");
    let sum = 0;
    const numOfPaystubs = allInputs.length;
    for (let i = 0; i < allInputs.length; i++) {
        sum += parseFloat(allInputs[i].value) || 0;
    }
    const toMultiply = sum/numOfPaystubs;
    yearly.textContent = `Yearly Income: ${toMultiply * 12}`;
    monthly.textContent = `Monthly Income: ${(toMultiply * 12)/12}`;
}
function inconsistentTwiceMonthly(){
    const allInputs = document.getElementsByClassName("sum-input");
    let sum = 0;
    const numOfPaystubs = allInputs.length;
    for (let i = 0; i < allInputs.length; i++) {
        sum += parseFloat(allInputs[i].value) || 0;
    }
    const toMultiply = sum/numOfPaystubs;
    yearly.textContent = `Yearly Income: ${toMultiply * 24}`;
    monthly.textContent = `Monthly Income: ${(toMultiply * 24)/12}`;
}




const form = document.getElementById("form");
const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");
form.addEventListener("submit", onSubmit);


