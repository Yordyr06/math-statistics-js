const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const btn = document.getElementById('calc');
const result = document.getElementById('result');

btn.addEventListener('click', discountCalc);

function discountCalc() {
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);
  const newPrice = (price * (100 - discount) / 100);

  if (!price || !discount) {
    result.innerText = 'Favor llenar todos los campos';
    return;
  }
  
  if (discount > 100) {
    result.innerText = 'Descuento errado';
    return;
  }

  result.innerText = 'Nuevo precio: $' + newPrice;
  console.log('Proceso exitoso');
}