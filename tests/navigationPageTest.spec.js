import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";

test('create Account_TC_001', async function CraeteAccount({page}) {

  let createAccount =  new navigationPage(page);
  await createAccount.navigatelogin();
  //await createAccount.clickAccount();

})