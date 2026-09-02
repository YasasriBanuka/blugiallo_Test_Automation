import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { addWishListFlow } from "../pages/addWishListFlowPage";
import { addproductWishList } from "../pages/addProductWishListPage";

test('Product WishList Workflow_TC_003', async function addToCartFLow({page}){

    let createAccount = new navigationPage(page);
    await createAccount.navigatelogin();
    await createAccount.clickClosePopup();

    // Add Product to WishList-1 
    let addWishList = new addWishListFlow(page);
    await addWishList.clickShorts();

    // add product to wishlist-2 
    let addProductWishList = new addproductWishList(page);
    await addProductWishList.clickWishlist();
    await page.waitForTimeout(2000);
    await addProductWishList.clickViewIcon();
    await addProductWishList.clickImage();
    await addProductWishList.clickSize32();
    await addProductWishList.clickPlus();
    await addProductWishList.clickAddToCart();
    await addProductWishList.clickViewCart();

    await page.waitForTimeout(8000);

});
