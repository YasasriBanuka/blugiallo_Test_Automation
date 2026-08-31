export class navigationPage {

    constructor(page) {
        this.page = page;
    }
    async navigatelogin() {
        await this.page.goto('https://blugiallo.com/');
    }

//     async clickAccount() {
//         await this.myAccountLink.click();
//     }
}