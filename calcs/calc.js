const ObjCalc = new Object;

// Función para calcular promedio
ObjCalc.average = (array) => {
  const result = array.reduce((sum, no) => sum + no) / array.length;
  return result;
}

// Función para determinar la mediana
ObjCalc.median = (array) => {
  let median;
  array = array.sort((a, b) => a - b);
  
  if (!(array.length % 2)) {
    median = array.length / 2;
    return ObjCalc.average([array[median, median - 1]]);

  } else {
    median = Math.floor(array.length / 2);
    return array[median];
  }
}

// Función para determinar la moda
ObjCalc.mode = (array) => {
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

// Función para determinar el promedio ponderado
ObjCalc.weightedAverage = (array) => {
  let subject = array.map(value => value.note * value.credit);
  subject = subject.reduce((sum, value) => sum + value);

  let credit = array.map(value => value.credit);
  credit = credit.reduce((sum, value) => sum + value);
  
  let result = subject / credit;
  result = Number(result.toFixed(2));
  
  return result;
}