export class navigationPage {

    constructor(page) {
        this.page = page;
        this.userIcon = page.locator('a.my-pages-link');
    }
    async navigatelogin() {
        await this.page.goto('https://blugiallo.com/');
    }

    async clickUserIcon() {
        await this.userIcon.click();
    }
}