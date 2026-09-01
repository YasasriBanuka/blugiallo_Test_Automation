import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { loginpage } from "../pages/loginpage";

test('login_TC_001', async function loginTest({ page }) {

    // call the navigationPage class and navigate to the login page
    let createAccount = new navigationPage(page);
    await createAccount.navigatelogin();
    await createAccount.clickClosePopup();
    await createAccount.clickUserIcon();

    // TC_001 - Automate the login functionality with valid credentials and verify the user is logged in successfully.
    let login = new loginpage(page);
    await login.clickRememberMe();
    await login.enterEmail('banukadias5@gmailcom');
    await login.enterPassword('Banuka@123');
    await login.clickRecaptcha();
    await login.clickLogin();

    await page.waitForTimeout(6000);

});