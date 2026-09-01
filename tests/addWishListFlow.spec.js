import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { addWishListFlow } from "../pages/addWishListFlowPage";
import { addproductWishList } from "../pages/addProductWishListPage";

test('Product WishList Workflow_TC_003', async function wishListFLow({page}){

    let createAccount = new navigationPage(page);
    await createAccount.navigatelogin();
    await createAccount.clickClosePopup();
  

    let addWishList = new addWishListFlow(page);
    await addWishList.clickShorts();

    
    let addProductWishList = new addproductWishList(page);
    await addProductWishList.clickWishlist();


    await page.waitForTimeout(6000);

});
