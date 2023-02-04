// Calculo de la altura de un triangulo escaleno
function solution(c, a, b) {
    if (a == b || a == c || b == c) { 
      return false;
    }
    const tita = Math.acos(((a * a + c * c - b * b) / (2 * a * c)));
    const altura = Math.round(a * Math.sin(tita))
    return altura
  }