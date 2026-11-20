import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

const casos = [
  { nombre: 'usuario estándar', usuario: 'standard_user', password: 'secret_sauce', resultado: 'inventory.html' },
  { nombre: 'usuario bloqueado', usuario: 'locked_out_user', password: 'secret_sauce', resultado: 'error' },
];

for (const caso of casos) {
  test(`login con ${caso.nombre}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.ir();
    await loginPage.login(caso.usuario, caso.password);

    if (caso.resultado === 'error') {
      await expect(loginPage.mensajeError).toBeVisible();
    } else {
      await expect(page).toHaveURL(`https://www.saucedemo.com/${caso.resultado}`);
    }
  });
}
