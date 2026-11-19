const assert = require('assert');

// 1. Validar formato de email
function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 2. Calcular el total de un carrito (array de objetos)
function calcularTotal(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// 3. Esperar una cantidad de milisegundos
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Pruebas
async function main() {
  // Prueba 1: email
  assert.strictEqual(esEmailValido('qa@empresa.com'), true, 'Email válido rechazado');
  assert.strictEqual(esEmailValido('qa@empresa'), false, 'Email inválido aceptado');
  console.log('✔ Prueba de email OK');

  // Prueba 2: carrito
  const carrito = [
    { nombre: 'Mouse', precio: 20, cantidad: 2 },
    { nombre: 'Teclado', precio: 50, cantidad: 1 },
    { nombre: 'Monitor', precio: 100, cantidad: 1 }
  ];
  assert.strictEqual(calcularTotal(carrito), 190, 'Total incorrecto');
  console.log('✔ Prueba de carrito OK');

  // Prueba 3: espera asíncrona
  const inicio = Date.now();
  await esperar(1000);
  const duracion = Date.now() - inicio;
  assert.ok(duracion >= 1000, 'La espera fue menor a 1 segundo');
  console.log('✔ Prueba de espera OK');

  console.log('\nTodas las pruebas pasaron');
}

main();
