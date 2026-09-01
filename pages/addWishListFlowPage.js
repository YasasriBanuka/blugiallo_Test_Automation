export class addWishListFlow {

   
    constructor(page) {
        this.lblShorts = page.locator('#site-navigation').getByRole('link', { name: 'Shorts' });
    }

    async clickShorts() {
        await this.lblShorts.click();
    }
    
}