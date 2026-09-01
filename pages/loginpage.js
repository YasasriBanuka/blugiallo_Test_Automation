export class loginpage {

    constructor(page) {
        this.cbxRememberMe = page.locator('#nasa_rememberme');
        this.txtEmailField = page.locator('#nasa_username');
        this.txtPasswordFiled = page.locator('#nasa_password');
        this.recaptchaLabelFiled = page.locator('.woocommerce-form-login .g-recaptcha');
        this.btnLogin = page.getByText('SIGN IN TO YOUR ACCOUNT');
    }
      async clickRememberMe() {
        await this.cbxRememberMe.click();
    }
    async enterEmail(email) {
        await this.txtEmailField.fill(email);
    }

    async enterPassword(password) {
        await this.txtPasswordFiled.fill(password);
    }

    async clickRecaptcha() {
        await this.recaptchaLabelFiled.click();
    }
    async clickLogin() {
        await this.btnLogin.click();
    }   


}