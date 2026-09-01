export class loginpage{

    constructor(page) {
     
      this.username =  page.locator('#username');
      this.password = page.locator('#password');
      this.cbxRememberMe = page.locator('#rememberme');
      this.btnLogin = page.getByRole('button', { name: 'Log in' });
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }       
    async enterPassword(password) {
        await this.password.fill(password);
    }
    async clickRememberMe() {
        await this.cbxRememberMe.check();
    }
    async clickLogin() {
        await this.btnLogin.click();
    }

}