const inputPrice = document.getElementById('price');
const inputCoupon = document.getElementById('coupon');
const btn = document.getElementById('calc');
const result = document.getElementById('result');

const coupon = {
  'spring' : 10,
  'summer' : 15,
  'autumn' : 20,
  'winter' : 25,
}

btn.addEventListener('click', discountCalc);

function discountCalc() {
  const price = Number(inputPrice.value);
  let discount;

  inputCoupon.value = inputCoupon.value.toLowerCase();

  if (price != 0 && Object.getOwnPropertyNames(coupon).includes(inputCoupon.value)) {
    discount = coupon[inputCoupon.value];
    const newPrice = (price * (100 - discount) / 100);
    result.innerText = `Nuevo precio: $${newPrice}`;
    console.log(`Proceso exitoso`);
    return

  } else if (Object.getOwnPropertyNames(coupon).includes(inputCoupon.value) == false) {
    result.innerText = `Cupón incorrecto, prueba con otro cupón`
    return

  } else {
    result.innerText = `Has ingresado un valor errado`
  }
}