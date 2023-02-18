// Calculo salarial individual
const searchPerson = (person) => {
  return salarios.find(value => value.name == person);
}

const medianPerson = (person) => {
  const works = searchPerson(person).trabajos;
  const salaries = works.map((element) => element.salario);

  return ObjCalc.median(salaries);
}

const salaryProjection = (person) => {
  const works = searchPerson(person).trabajos;
  let growth = [];

  for (let i = 1; i < works.length; i++) {
    const present = works[i].salario;
    const past = works[i - 1].salario;
    const projection = present - past;
    const percent = projection / past;
    growth.push(percent);
  }

  const growthMedian = ObjCalc.median(growth);
  const rise = works[works.length - 1].salario * growthMedian;
  const newSalary = works[works.length - 1].salario + rise;

  return {
    rise,
    newSalary,
  }
}



// Calculo salarial por empresas
const companies = new Object;

salarios
  .forEach(person => person.trabajos.forEach(work => {
    if (!companies[work.empresa]) {
      companies[work.empresa] = {};
    };

    if (!companies[work.empresa][work.year]) {
      companies[work.empresa][work.year] = [];
    }

    companies[work.empresa][work.year].push(work.salario);
  }));

const companyAnalyst = (name, year) => {
  if (!companies[name]) {
    console.warn('La empresa no existe');
  } else if (!companies[name][year]) {
    console.warn('Año invalido');
  } else {
    return ObjCalc.median(companies[name][year]);
  }
}


const salariesAnalyst = (name) => {
  let years
  let growth = [];


  if (!companies[name]) {
    console.warn('La empresa no existe');
  } else {
    years = Object.keys(companies[name])
      .map(year => companyAnalyst(name, year));
  }


  for (let i = 1; i < years.length; i++) {
    const present = years[i];
    const past = years[i - 1];
    const projection = present - past;
    const percent = projection / past;
    growth.push(percent);
  }

  const growthMedian = ObjCalc.median(growth);
  const rise = years[years.length - 1] * growthMedian;
  const newSalary = years[years.length - 1] + rise;

  return {
    years,
    rise,
    newSalary,
  }

}



// Análisis General
const generalAnalyst = () => {
  const generalMedian = salarios.map(
    person => medianPerson(person.name)
  );

  return (
    ObjCalc.median(generalMedian)
  );
}

const top10Salaries = () => {
  const generalMedian = salarios.map(
    person => medianPerson(person.name)
  ).sort(
    (a, b) => a - b
  );
  
  const quantity = generalMedian.length / 10;
  const limit = generalMedian.length - quantity;
  const top10 = generalMedian.slice(limit, generalMedian.length);
  const medianTop10 = ObjCalc.median(top10);
  

  return {
    generalMedian,
    top10,
    medianTop10,
  };
}