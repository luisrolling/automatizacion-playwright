export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usuario = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.botonLogin = page.getByRole('button', { name: 'Login' });
    this.mensajeError = page.locator('[data-test="error"]');
  }

  async ir() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(usuario, password) {
    await this.usuario.fill(usuario);
    await this.password.fill(password);
    await this.botonLogin.click();
  }

  async obtenerError() {
  return this.mensajeError;
  }

}
