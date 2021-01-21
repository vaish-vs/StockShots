const investmentValue = document.querySelector("#inv-value")
const invSlider = document.querySelector("#invslider")

const yearValue = document.querySelector("#yearvalue")
const yearSlider = document.querySelector("#yearslider")

const returnValue = document.querySelector("#returnvalue")
const returnSlider = document.querySelector("#returnslider")

var rangeValue = function(){
    var newValue = invSlider.value;
    investmentValue.value = newValue;
}

var yearRange = function(){
    var newValue = yearSlider.value;
    yearValue.value = newValue + " Years";
}

var returnRange = function(){
    var newValue = returnSlider.value;
    returnValue.value = newValue + "%";
}

invSlider.addEventListener("input", rangeValue);
yearSlider.addEventListener("input", yearRange);
returnSlider.addEventListener("input", returnRange);

