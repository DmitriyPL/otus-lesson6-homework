module.exports = { getRadius, getSize, circleInSquare };

function getRadius(circle){
    return Math.sqrt(circle/Math.PI).toFixed(2);
}

function getSize(square) {
    return Math.sqrt(square).toFixed(2);
}

function circleInSquare(circle, square){   
    return (getRadius(circle) * 2) <= getSize(square);
}

function main(){
    circleInSquare(circle, square);
}