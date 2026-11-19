// Login
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login valido lleva al inventario', async ({ page }) => {
  const loginPage = new LoginPage(page);  
  await loginPage.ir();
  await loginPage.login('standard_user','secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Usuario Bloqueado muestra mensaje de error', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.ir();
    await loginPage.login('locked_out_user','secret_sauce');
    await expect(loginPage.mensajeError).toContainText('Sorry, this user has been locked out');
})