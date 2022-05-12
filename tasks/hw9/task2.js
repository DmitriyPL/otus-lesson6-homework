module.exports = { getCircumferenceLength, getCircleArea };

function getCircumferenceLength(radius){
 
    const length = (2 * Math.PI * radius).toFixed(2);

    console.log(length);

    return length;
}

function getCircleArea(radius){
 
  const area = (Math.PI * radius * radius).toFixed(2);

  console.log(area);

  return area;
}

function main(){
    
    const radius = 3;

    getCircumferenceLength(radius); 
    getCircleArea(radius);

}

