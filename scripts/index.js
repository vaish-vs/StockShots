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

var rangeValue = function(){
    var newValue = invSlider.value;
    investmentValue.value = newValue;

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = investedamount;

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    createdWealthText.innerHTML = Math.round(createdWealth);
    console.log(Math.round(createdWealth));
    
}

var yearRange = function(){
    var newValue = yearSlider.value;
    yearValue.value = newValue + " Years";

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = investedamount;

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    createdWealthText.innerHTML = Math.round(createdWealth);
    console.log(Math.round(createdWealth));
    
}

var returnRange = function(){
    var newValue = returnSlider.value;
    returnValue.value = newValue + "%";

    //Calculating Invested Amount
    investedamount = invSlider.value * 12 * yearSlider.value;
    investedamountText.innerHTML = investedamount;

    //Calculating Wealth Created
    interestRate = returnSlider.value/1200;
    createdWealth = invSlider.value * ((Math.pow((1+interestRate), yearSlider.value*12) - 1)/interestRate) * (1+interestRate);
    createdWealthText.innerHTML = Math.round(createdWealth);
    console.log(Math.round(createdWealth));
}

invSlider.addEventListener("input", rangeValue);
yearSlider.addEventListener("input", yearRange);
returnSlider.addEventListener("input", returnRange);





