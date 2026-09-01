import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { loginpage } from "../pages/loginpage";

test('login_TC_001', async function loginTest({ page }) {

    let createAccount = new navigationPage(page);
    await createAccount.navigatelogin();
    await createAccount.clickUserIcon();

    let login = new loginpage(page);
    await login.enterUsername('	banukadias5@gmail.com');
    await login.enterPassword('Banuka@1212');
    await login.clickRememberMe();
    await login.clickLogin();

    await page.waitForTimeout(6000);

});