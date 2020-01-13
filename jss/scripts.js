var gallon = function(number1) {
    return number1/3.785;
};
var number1 = parseInt(prompt("enter litres"));
var ans = gallon(number1);
alert(ans);