// Funcion para calcular promedio
const average = (array) => {
  const result = array.reduce((sum, no) => sum + no) / array.length;
  return result;
}

// Fucion para determinar la mediana
const median = (array) => {
  let median;
  array = array.sort((a, b) => a - b);
  
  if (!(array.length % 2)) {
    median = array.length / 2;
    return average([array[median, median - 1]]);

  } else {
    median = Math.floor(array.length / 2);
    return array[median];
  }
}