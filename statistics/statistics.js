// Funcion para calcular promedio

const average = (array) => {
  const result = array.reduce((sum, no) => sum + no) / array.length;
  return result;
}