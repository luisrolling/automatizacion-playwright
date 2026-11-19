import { test, expect } from '@playwright/test';

test('GET de un post devuelve 200 y los campos esperados', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('userId');
});

test('POST crea un recurso y devuelve 201', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'Prueba QA', body: 'Contenido de prueba', userId: 1 },
  });
  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe('Prueba QA');
});

test('GET de un recurso inexistente devuelve 404', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');
  expect(response.status()).toBe(404);

});

test('GET Texto no vacío', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).not.toBe('');

});
