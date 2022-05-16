export function isRectangular(arr){
 
    let arrSides = arr.filter(num => num > 0);
    if (arrSides.length < 3) { return false; }

    arrSides.sort(function(a, b) {
      return a - b;
    });
 
    const a = arrSides[0];
    const b = arrSides[1];
    const c = arrSides[2];

    const res = ( (a*a + b*b) === c*c ) ? true : false;

    console.log(res);

    return res;
}

function main(){
    
    const a = 3;
    const b = 4;
    const c = 5;
    
    let arrSides = [a, b, c];

    isRectangular(arrSides); 

}

