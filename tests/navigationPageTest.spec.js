import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { signUpPage } from "../pages/signUpPage";

test('create Account_TC_001', async function CraeteAccount({page}) {

  let createAccount =  new navigationPage(page);
  await createAccount.navigatelogin();
  await createAccount.clickClosePopup();
  await createAccount.clickUserIcon();

  await createAccount.clickRegister();
  await createAccount.enterEmail('banukadias5@gmail.com');
  await createAccount.enterPassword('Banuka@123');
  await createAccount.clickRecaptcha();
  await createAccount.clickRegisterButton();

   await page.waitForTimeout(6000);
 
  // await registerPage.enterFirstName('Banuka Dias');
  // await registerPage.enterLastName('Wimalaweera');
  // await registerPage.enterEmail('banukadias5@gmail.com');
  // await registerPage.clickRegister();
})



