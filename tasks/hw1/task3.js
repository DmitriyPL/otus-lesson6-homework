export function sumOfNumbers(num){
    const sum = String(num).split('').map( x => Number(x) ).reduce((prevVal, curVal) => 
        prevVal + ((typeof curVal) === "number" ? curVal : 0), 0);
    console.log(sum);

    return sum;
}

export function getSumOfNumbers(){
    const num = prompt('Enter a number');

    if (isNaN(Number(num))) {
        console.log("Please, enter a number!");
    } else {
        console.log(sumOfNumbers(num));
    }
}