import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { signUpPage } from "../pages/signUpPage";

test('create Account_TC_001', async function CraeteAccount({page}) {

  let createAccount =  new navigationPage(page);
  await createAccount.navigatelogin();
  await createAccount.clickUserIcon();

  let registerPage = new signUpPage(page);
  await registerPage.enterFirstName('Banuka Dias');
  await registerPage.enterLastName('Wimalaweera');
  await registerPage.enterEmail('banukadias5@gmail.com');
  await registerPage.clickRegister();
})