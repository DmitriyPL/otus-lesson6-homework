export function getRadius(circle) {
  return Math.sqrt(circle / Math.PI).toFixed(2);
}

export function getSize(square) {
  return Math.sqrt(square).toFixed(2);
}

export function circleInSquare(circle, square) {
  return (getRadius(circle) * 2) <= getSize(square);
}

function main() {
  circleInSquare(2, 3);
}
