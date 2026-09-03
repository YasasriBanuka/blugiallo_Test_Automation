export class checkoutPage {

    constructor(page) {
        this.page = page;

        // Billing Details
        this.txtBillingFirstName = page.locator('#billing_first_name');
        this.txtBillingLastName = page.locator('#billing_last_name');
        this.billingCountry = page.locator('#billing_country');
        this.txtBillingAddress1 = page.locator('#billing_address_1');
        this.txtBillingCity = page.locator('#billing_city');
        this.txtBillingState = page.locator('#billing_state');
        this.txtBillingPostcode = page.locator('#billing_postcode');
        this.txtBillingPhone = page.locator('#billing_phone');
        this.txtBillingEmail = page.locator('#billing_email');

        // Payment Method
        this.paymentMethodStripe = page.locator('#payment_method_stripe');

        this.stripeFrame = page.frameLocator('#wc-stripe-upe-form .wc-stripe-upe-element iframe');
        // Stripe Card Fields
         this.cardNumberInput =
            this.stripeFrame.getByPlaceholder(
                '1234 1234 1234 1234'
            );

        this.paymentExpiryInput =
            this.stripeFrame.getByPlaceholder(
                'MM / YY'
            );

        this.paymentCvcInput =
            this.stripeFrame.getByPlaceholder(
                'CVC'
            );

        // Place Order
        this.placeOrderButton = page.locator('#place_order');
    }

    // =========================
    // Billing Details
    // =========================

    async enterBillingFirstName(firstName) {
        await this.txtBillingFirstName.fill(firstName);
    }

    async enterBillingLastName(lastName) {
        await this.txtBillingLastName.fill(lastName);
    }

    async selectBillingCountry() {
        await this.billingCountry.selectOption('GB');
    }

    async enterBillingAddress1(address1) {
        await this.txtBillingAddress1.fill(address1);
    }

    async enterBillingCity(city) {
        await this.txtBillingCity.fill(city);
    }

    async enterBillingState(state) {
        await this.txtBillingState.fill(state);
    }

    async enterBillingPostcode(postcode) {
        await this.txtBillingPostcode.fill(postcode);
    }

    async enterBillingPhone(phone) {
        await this.txtBillingPhone.fill(phone);
    }

    async enterBillingEmail(email) {
        await this.txtBillingEmail.fill(email);
    }

    // =========================
    // Payment Method
    // =========================

    // Select Credit / Debit Card
    async selectCreditDebitCard() {
        await this.paymentMethodStripe.check();
    }

    // =========================
    // Stripe Card Details
    // =========================

    // Card Number
    async enterCardNumber(cardNumber) {
        await this.cardNumberInput.fill(cardNumber);
    }

    // Expiration Date
    async enterCardExpiry(expiry) {
        await this.paymentExpiryInput.fill(expiry);
    }

    // Security Code
    async enterCardCVC(cvc) {
        await this.paymentCvcInput.fill(cvc);
    }

    // =========================
    // Place Order
    // =========================

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }
}