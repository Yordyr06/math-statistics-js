// Calculos basicos para un cuadrado con javascript
const squareCalc = (side) => {
  const perimeter = side * 4;
  const area = side * side;

  return{
    side,
    perimeter,
    area,
  }
}

// Calculos basicos para un triangulo con javascript
const triangleCalc = (sideA, sideB, base, hight) => {
  const perimeter = sideA + sideB + base;
  const area = (base * hight) / 2;
  
  return{
    sideA,
    sideB,
    base,
    hight,
    perimeter,
    area,
  }
}