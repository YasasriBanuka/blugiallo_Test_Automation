export class addproductWishList {

     constructor(page) {
        this.btnWishlist = page.locator('a.btn-wishlist[data-prod="12042"]');
        this.alertMessage = page.getByRole('alert');

    }

    async clickWishlist() {
        await this.btnWishlist.click();
    }

}


