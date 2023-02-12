// Calculos basicos para un cuadrado con javascript
const squareCalc = (side) => {
  const perimeter = side * 4;
  const area = side * side;

  return [
    side,
    perimeter,
    area,
  ]
}



// Calculos basicos para un triangulo con javascript
const triangleCalc = (side, base) => {
  const perimeter = (2 * side) + base;
  const hight = Math.sqrt((side ** 2) - ((base ** 2)/4)).toFixed(2);
  const area = (base * hight) / 2;
  
  return [
    side,
    base,
    hight,
    perimeter,
    area,
  ]
}



// Calculos basicos para un triangulo con javascript
const rectangleCalc = (base, hight) => {
  const perimeter = 2 * (base * hight);
  const area = base * hight;

  return [
    base,
    hight,
    perimeter,
    area,
  ]
}