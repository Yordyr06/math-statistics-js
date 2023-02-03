// Calculo de porcentaje con la formula: [P * (100 - D)] / 100

const percent = (price, discount) => {
  const solution = (price * (100 - discount)) / 100;
  return solution;
}