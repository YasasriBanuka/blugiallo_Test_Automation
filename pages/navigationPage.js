export class navigationPage {

    constructor(page) {
        this.page = page;
        this.userIcon = page.getByText('Login / Register');
        this.closePopup = page.locator('button.hustle-button-close');
        this.btnRegister = page.getByText('Create an account');
        this.txtEmail = page.locator('#nasa_reg_email');
        this.txtPassword = page.locator('#nasa_reg_password');
        this.recaptchaLabel = page.locator('.woocommerce-form.woocommerce-form-register .g-recaptcha');

        this.btnsetUp= page.getByText('SETUP YOUR ACCOUNT');
    }
    async navigatelogin() {
        await this.page.goto('https://www.territory-london.com/');
    }

    async clickClosePopup() {
        await this.closePopup.click();
    }

    async clickUserIcon() {
        await this.userIcon.click();
    }
    async clickRegister() {
        await this.btnRegister.click();
    }

    async enterEmail(email) {
        await this.txtEmail.fill(email);
    }   
    async enterPassword(password) {
        await this.txtPassword.fill(password);
    }   

    async clickRecaptcha() {
        await this.recaptchaLabel.click();
    }
    async clickRegisterButton() {
        await this.btnsetUp.click();
    }


}