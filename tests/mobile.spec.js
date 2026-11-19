import { test, expect, devices } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.use({ ...devices['Pixel 5'] });

test.describe('Login en móvil', () => {
  test('login válido funciona en viewport de Pixel 5', async ({ page }) => {
    expect(page.viewportSize().width).toBe(393);

    const loginPage = new LoginPage(page);
    await loginPage.ir();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
