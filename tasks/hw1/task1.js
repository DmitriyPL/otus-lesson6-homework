module.exports = { calcSum, calcMultiplication };

function calcSum(num1, num2){
    const sum = num1 + num2; 
    console.log(sum);
    return sum; 
}

function calcMultiplication(num1, num2){
    const mult = num1 * num2;
    console.log(mult);
    return mult;
}

function showSumAndMultiplication(num1, num2){
    calcSum(num1, num2);
    calcMultiplication(num1, num2);
}

