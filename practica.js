const assert = require('assert');

// 1. Funcion descuento
function calculadescuentoo(precio,porcentaje) {

    return precio - precio * porcentaje/100;
}

// Pruebas
async function main() {
  // Prueba 1: calculo
  assert.strictEqual(calculadescuentoo(100,15), 85, 'resultado correcto');
  console.log('✔ calculo OK');
}
main();