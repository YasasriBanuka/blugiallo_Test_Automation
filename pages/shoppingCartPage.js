export class shoppingCartPage {
    constructor(page) {

        this.btnMinus = page.locator('a.minus');
        this.btnUpdateCart = page.getByRole('button', { name: 'Update Cart' });
        this.btnProceedCheckout = page.getByRole('link', { name: 'Proceed to checkout' });
    }
    async clickminus() {
        this.btnMinus.click();
    }
    async clickUpdateCart() {
        await this.btnUpdateCart.click();
    }
    async clickProceedCheckout() {
        await this.btnProceedCheckout.click();
    }
}