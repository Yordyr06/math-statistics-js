const searchPerson = (person) => {
  return salarios.find(value => value.name == person);
}

const medianPerson = (person) => {
  const works = searchPerson(person).trabajos;
  const salaries = works.map((element) => element.salario);

  return ObjCalc.median(salaries);
}