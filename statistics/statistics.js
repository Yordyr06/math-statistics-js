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

// Reto. Calcular otro tipo de promedio.
  // ¿Cuál tipo de promedio elegiste para trabajar?
  // ¿Qué casos de uso tiene tu tipo de promedio?
  // ¿Cómo traduces su fórmula a código JavaScript?

// Promedio Ponderado.
// Definir el conjunto de números junto al peso de cada elemento
const notes = [
  {
    subject: 'Programming',
    note: 10,
    credit: 4,
  },

  {
    subject: 'Data Base',
    note: 7,
    credit: 3,
  },
  
  {
    subject: 'Cloud',
    note: 8,
    credit: 5,
  },
];

const weightedAverage = (array) => {
  // Multiplicar cada número de la lista por su peso
  let subject = array.map(value => value.note * value.credit);

  // Sumar todos los elementos del arreglo de elementos multiplicados por su peso
  subject = subject.reduce((sum, value) => sum + value);

  // Sumar todos los pesos (créditos)
  let credit = array.map(value => value.credit);
  credit = credit.reduce((sum, value) => sum + value);

  // Hacer la división entre ambas “sumas”
  let result = subject / credit;
  result = Number(result.toFixed(2));
  return result;
}