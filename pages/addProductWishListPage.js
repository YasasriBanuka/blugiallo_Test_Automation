export class addproductWishList {

    constructor(page) {
        this.btnWishlist = page.locator('a.btn-wishlist[data-prod="12042"]');
        this.btnviewIcon = page.getByRole('link', { name: 'Quick View' });
        this.clickbtnImage = page.locator('li.lvfw-product[data-title="Slate Grey"] img');
        this.btnSize32 = page.locator('li[role="radio"][data-attribute_name="attribute_pa_waist"][data-value="32"]');
        this.btnPlus = page.locator('a.plus');
        this.btnAddToCart = page.locator('button.single_add_to_cart_button');
        this.btnViewCart = page.getByRole('link', { name: 'View cart' });


    }
    async clickWishlist() {
        await this.btnWishlist.click();
    }
    async clickViewIcon() {
        await this.btnviewIcon.click();
    }
    async clickImage() {
        await this.clickbtnImage.click();
    }
    async clickSize32() {
        await this.btnSize32.click();
    }
    async clickPlus() {
        await this.btnPlus.dblclick();
    }
    async clickAddToCart() {
        await this.btnAddToCart.click();
    }

    async clickViewCart() {
        await this.btnViewCart.click();
    }
}


