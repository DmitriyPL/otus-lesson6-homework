module.exports = { getArithmeticMeanForOdd };

function getArithmeticMeanForOdd(userInput){
    
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= userInput; i++){
        if( i % 2 != 0 ){
            counter++;
            sum += i;
        }
    }
    
    const average = (sum / counter).toFixed(2); 

    console.log(average);

    return average; 
}

function main(){
    const userInput = prompt("Enter a number");
    getArithmeticMeanForOdd(userInput);
}

