const investmentValue = document.querySelector("#inv-value")
const invSlider = document.querySelector("#invslider")

const yearValue = document.querySelector("#yearvalue")
const yearSlider = document.querySelector("#yearslider")

const returnValue = document.querySelector("#returnvalue")
const returnSlider = document.querySelector("#returnslider")

const investedamountText = document.querySelector(".investedamount")
const createdWealthText = document.querySelector(".wealthcreated")


var investedamount;
var createdWealth;
var interestRate;

function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E5, symbol: "L" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }



var rangeValue = function(){
    var newValue = invSlider.value;
    investmentValue.value = newValue;

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = nFormatter(investedamount, 2);

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    //createdWealthText.innerHTML = Math.round(createdWealth/1000)*1000;
    createdWealthText.innerHTML = nFormatter(createdWealth, 2);
    
    
}

var yearRange = function(){
    var newValue = yearSlider.value;
    yearValue.value = newValue + " Years";

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = nFormatter(investedamount, 2);

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    //createdWealthText.innerHTML = Math.round(createdWealth/1000)*1000;
    createdWealthText.innerHTML = nFormatter(createdWealth, 2);

    console.log(yearValue.value.toString().slice(0, 2));
    
}

var returnRange = function(){
    var newValue = returnSlider.value;
    returnValue.value = newValue + "%";

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = nFormatter(investedamount, 2);

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    //createdWealthText.innerHTML = Math.round(createdWealth/1000)*1000;
    createdWealthText.innerHTML = nFormatter(createdWealth, 2);
}

var invValueUpdate = function(){
    var realValue = investmentValue.value;
    invSlider.value = realValue;
}

var yearValueUpdate = function(){
    var realValue = yearValue.value;
    yearSlider.value = realValue;
}

var returnValueUpdate = function(){
    var realValue = returnValue.value;
    returnSlider.value = realValue;
}



invSlider.addEventListener("input", rangeValue);
yearSlider.addEventListener("input", yearRange);
returnSlider.addEventListener("input", returnRange);
investmentValue.addEventListener("change", invValueUpdate);
yearValue.addEventListener("change", yearValueUpdate);
returnValue.addEventListener("change", returnValueUpdate);



