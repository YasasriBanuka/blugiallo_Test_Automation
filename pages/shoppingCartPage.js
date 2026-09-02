export class shoppingCartPage {
    constructor(page) {

        this.btnMinus = page.locator('a.minus');
        this.btnUpdateCart = page.locator('update_cart');
        this.btnCheckout = page.getByText('Proceed to checkout');
    }
    async clickViewCart() {
        this.btnMinus.dblclick();
    }
    async clickUpdateCart() {
        this.btnUpdateCart.click();
    }
    async clickCheckout() {
        this.btnCheckout.click();
    }
}