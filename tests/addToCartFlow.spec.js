import test from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { addWishListFlow } from "../pages/addWishListFlowPage";
import { addproductWishList } from "../pages/addProductWishListPage";
import { shoppingCartPage } from "../pages/shoppingCartPage";
import { checkoutPage } from "../pages/checkoutPage";

test('Product WishList Workflow_TC_003', async function addToCartFLow({ page }) {

    let createAccount = new navigationPage(page);

    await createAccount.navigatelogin();
    await createAccount.clickClosePopup();


    // Add Product to WishList-1
    let addWishList = new addWishListFlow(page);

    await addWishList.clickShorts();


    // Add Product to WishList-2
    let addProductWishList = new addproductWishList(page);

    await addProductWishList.clickWishlist();
    await page.waitForTimeout(3000);
    await addProductWishList.clickViewIcon();
    await addProductWishList.clickImage();
    await addProductWishList.clickSize32();
    await addProductWishList.clickPlus();
    await addProductWishList.clickAddToCart();
    await addProductWishList.clickViewCart();


    // Shopping Cart
    let shoppingCart = new shoppingCartPage(page);

    await shoppingCart.clickminus();
    await shoppingCart.clickProceedCheckout();


    // Checkout
    let checkout = new checkoutPage(page);

    await checkout.enterBillingFirstName('Pathum Dinujaya');
    await checkout.enterBillingLastName('Jayaruwan');
    await checkout.selectBillingCountry();
    await checkout.enterBillingAddress1('25 Baker Street');
    await checkout.enterBillingCity('London');
    await checkout.enterBillingState('Test State');
    await checkout.enterBillingPostcode('1NW1 6XE');
    await checkout.enterBillingPhone('+44 20 7946 0958');
    await checkout.enterBillingEmail('pathumdinujaya@gmail.com');


    // Select Credit/Debit Card
    await checkout.selectCreditDebitCard();


    // Enter Card Details
    await checkout.enterCardNumber('4242424242424242');
    await checkout.enterCardExpiry('12/34');
    await checkout.enterCardCVC('123');


    // Place Order
    await checkout.clickPlaceOrder();

});

