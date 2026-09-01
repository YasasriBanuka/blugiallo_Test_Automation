export class signUpPage {
    constructor(page) {
        this.txtFName = page.locator('#reg_billing_first_name');
        this.txtLName = page.locator('#reg_billing_last_name');
        this.testEmail = page.locator('#reg_email');
        this.btnRegister = page.getByRole('button', { name: 'Register' });
    }
    async enterFirstName(firstName) {
        await this.txtFName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.txtLName.fill(lastName);
    }

    async enterEmail(email) {
        await this.testEmail.fill(email);
    }

    async clickRegister() {
        await this.btnRegister.click();
    }
}