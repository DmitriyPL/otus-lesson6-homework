export function getDiff(num1, num2){
    
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);

    const res = max - min; 

    console.log(res);

    return res;
}

function main(){
    
    const num1 = prompt("Enter first number");
    const num2 = prompt("Enter second number");

    getDiff(num1, num2); 

}

