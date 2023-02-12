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

// Funcion para determinar la moda
const mode = (array) => {
  const obj = new Object();
  let arr;
  let mode;

  array.forEach(element =>
    !obj[element]
      ? obj[element] = 1
      : obj[element] ++
  );
  
  arr = Object.entries(obj);
  arr.sort((a,b) => b[1] - a[1]);

  mode = arr[0];
  return mode;
};