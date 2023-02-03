// Calculos basicos para circulos con javascript
const circleCalc = (radio) => {
  const diameter = radio * 2;
  const radioPow = Math.pow(radio, 2);
  const circumference = diameter * Math.PI.toFixed(2); 
  const area = radioPow * Math.PI.toFixed(2);
  
  return {
    radio,
    diameter,
    radioPow,
    circumference,
    area,
  }
}



// Calculos basicos para circunferencia con javascript
const sphereCalc = (radio) => {
  const diameter = radio * 2;
  const volumen = 3/4 * Math.PI.toFixed(2) * (math.pow(radio, 3));
  const area = 4 * Math.PI.toFixed(2) * math.pow(radio, 2);
  
  return {
    radio,
    diameter,
    volumen,
    area,
  }
}



// Calculos basicos para cilindros con javascript
const cylinderCalc = (radio, hight) => {
  const diameter = radio * 2;
  const volumen = Math.PI.toFixed(2) * (Math.pow(radio, 2));
  const areaT = 2 * Math.PI.toFixed(2) * (radio + hight);
  const areaL = 2 * Math.PI.toFixed(2) * radio;

  return {
    radio,
    hight,
    diameter,
    volumen,
    areaT,
    areaL,
  }
}



// Calculos basicos para conos con javascriptconst
const coneCalc = (radio, hight) => {
  const diameter = radio * 2;
  const generatrix = Math.pow((radio + hight), 2);
  const volumen = (Math.PI.toFixed(2) * Math.pow(radio, 2) * hight) / 3;
  const areaT = Math.PI.toFixed(2) * radio * (generatrix + radio);
  const areaL = Math.PI.toFixed(2) * radio * generatrix;

  return {
    radio,
    hight,
    diameter,
    generatrix,
    volumen,
    areaT,
    areaL,
  }
}