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
  
  ObjCalc.weightedAverage = (array) => {
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